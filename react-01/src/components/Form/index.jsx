import { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import DropdownMenu from "../DropdownMenu";
import CreateButton from "../CreateButton";

const Form = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    let dataToSend = {
      name,
      title,
      photo,
      team,
    };
    console.log(dataToSend);
  };

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
          // placeholder="Seleccionar equipo..."
          fieldValue={team}
          fieldFunction={setTeam}
          equipos={props.equipos}
        />
        <CreateButton text="Crear"/>
      </form>
    </section>
  );
};

export default Form;
