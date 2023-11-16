import Proptypes from "prop-types";

const Error = ({ error }) => {
  return (
    <div className="contenedor">
      <p className="alerta">{error}</p>
    </div>
  );
};

export default Error;

Error.propTypes = {
  error: Proptypes.string.isRequired,
};
