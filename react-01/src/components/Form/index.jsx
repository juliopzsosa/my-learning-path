import { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import DropdownMenu from "../DropdownMenu";
import CreateButton from "../CreateButton";

const Form = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [equipo, setTeam] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const handleSend = (e) => {
    e.preventDefault();
    let dataToSend = {
      name,
      title,
      photo,
      equipo,
    };
    registrarColaborador(dataToSend);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={handleSend}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextField
          label="Nombre"
          placeholder="nombre"
          required
          fieldValue={name}
          fieldFunction={setName}
        />
        <TextField
          label="Puesto"
          placeholder="puesto"
          required
          fieldValue={title}
          fieldFunction={setTitle}
        />
        <TextField
          label="Foto"
          placeholder="enlace de foto"
          required
          fieldValue={photo}
          fieldFunction={setPhoto}
        />
        <DropdownMenu
          fieldValue={equipo}
          fieldFunction={setTeam}
          equipos={props.equipos}
        />
        <CreateButton text="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear un equipo.</h2>
        <TextField
          label="Equipo"
          placeholder="Ingresar equipo"
          required
          fieldValue={titulo}
          fieldFunction={actualizarTitulo}
        />
        <TextField
          label="Color"
          placeholder="Ingresar color en hexadecimal: #XXX"
          required
          fieldValue={color}
          fieldFunction={actualizarColor}
          
        />
        <CreateButton text="Registrar equipo" />
      </form>
    </section>
  );
};

export default Form;
