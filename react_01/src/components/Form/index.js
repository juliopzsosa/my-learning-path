import "./Form.css";
import TextField from "../TextField/index.js";

const Form = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextField label='Nombre' placeholder='nombre'/>
            <TextField label='Puesto' placeholder='puesto'/>
            <TextField label='Foto' placeholder='enlace de foto'/>
        </form>
    </section>;
}

export default Form