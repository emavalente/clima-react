import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [consulta, setConsulta] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado, setResultado] = useState({});
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const onChangeInput = (e) =>
    setConsulta((prevConsulta) => ({
      ...prevConsulta,
      [e.target.name]: e.target.value,
    }));

  const consultarClima = async (datos) => {
    try {
      setError("");
      setCargando(true);
      const { ciudad, pais } = datos;

      const appId = import.meta.env.VITE_API_KEY;

      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&limit=1&appid=${appId}`;
      const { data } = await axios(URL);
      const { lon, lat } = data.coord;

      const URLClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const { data: clima } = await axios(URLClima);

      setCargando(false);
      setResultado(clima);
    } catch (error) {
      setCargando(false);
      setError("No existen resultados para esta búsqueda");
    }
  };

  return (
    <ClimaContext.Provider
      value={{
        consulta,
        onChangeInput,
        consultarClima,
        resultado,
        error,
        cargando,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export default ClimaProvider;

ClimaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
