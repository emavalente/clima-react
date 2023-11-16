import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { consulta, onChangeInput, consultarClima } = useClima();
  const { ciudad, pais } = consulta;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(consulta).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      setTimeout(() => setAlerta(""), 3000);
      return;
    }

    consultarClima(consulta);
  };

  return (
    <div className="contenedor">
      {alerta && <p className="alerta">{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={ciudad}
            onChange={onChangeInput}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select id="pais" name="pais" value={pais} onChange={onChangeInput}>
            <option value="">-- Seleccione un país --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
