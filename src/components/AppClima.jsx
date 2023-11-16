import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Error from "./Error";
import Spinner from "./Spinner";

const AppClima = () => {
  const { resultado, error, cargando } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Spinner />
        ) : error ? (
          <Error error={error} />
        ) : (
          resultado?.name && <Resultado clima={resultado} />
        )}
      </main>
    </>
  );
};

export default AppClima;
