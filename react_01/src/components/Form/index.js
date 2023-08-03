import "./Form.css";
import TextField from "../TextField";
import DropdownMenu from "../DropdownMenu";
import CreateButton from "../CreateButton";

const handleSend = (e) => {
    e.preventDefault();
    console.log("Manejar el envio", e);
}

const Form = () => {
    return <section className="formulario">
        <form onSubmit={handleSend}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextField label='Nombre' placeholder='nombre'/>
            <TextField label='Puesto' placeholder='puesto'/>
            <TextField label='Foto' placeholder='enlace de foto'/>
            <DropdownMenu placeholder='Seleccionar equipo...'/>
            <CreateButton text='Crear'/>
        </form>
    </section>;
}

export default Form