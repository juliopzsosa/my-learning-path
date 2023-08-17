import "./Campo.css";

const Campo = (props) => {
  const modifiedPlaceholder = `Ingresar ${props.placeholder}...`;

  // Destructuración
  const { type = "text" } = props;

  const handleChange = (e) => {
    props.fieldFunction(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.label}</label>
      <input
        placeholder={modifiedPlaceholder}
        required={props.required}
        value={props.fieldValue}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default Campo;
