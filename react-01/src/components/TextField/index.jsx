import "./TextField.css";

const TextField = (props) => {

  const modifiedPlaceholder = `Ingresar ${props.placeholder}...`;

  const handleChange = (e) => {
    props.fieldFunction(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        placeholder={modifiedPlaceholder}
        required={props.required}
        value={props.fieldValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
