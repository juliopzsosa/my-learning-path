import "./DropdownMenu.css";

const DropdownMenu = (props) => {
  /* Map Method:

        array.map( (team, index) => {
            return <option></option>;
        });

    */

  const teams = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const handleChange = (e) => {
    props.fieldFunction(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.fieldValue} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo...
        </option>
        {teams.map((team, index) => (
          <option key={index} value={team}>{team}</option>
        ))}
        ;
      </select>
    </div>
  );
};

export default DropdownMenu;
