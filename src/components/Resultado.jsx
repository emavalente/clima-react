import Proptypes from "prop-types";
const Resultado = ({ clima }) => {
  const { name, main } = clima;

  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es:</h2>
      <p>
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Temp. Min.: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Temp. Max.: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;

Resultado.propTypes = {
  clima: Proptypes.object.isRequired,
};
