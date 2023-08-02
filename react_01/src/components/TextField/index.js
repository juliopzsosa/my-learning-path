import "./TextField.css"

const TextField = (props) => {
    const modifiedPlaceholder = `Ingresar ${props.placeholder}...`;
    return <div className="campo-texto">
        <label>{props.label}</label>
        <input placeholder={modifiedPlaceholder} />
    </div>;
}

export default TextField;