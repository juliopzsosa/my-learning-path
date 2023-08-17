import "./DropdownMenu.css";

const DropdownMenu = (props) => {
  /* Map Method:

        array.map( (item, index) => {
            return <option></option>;
        });

    */

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
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
        ;
      </select>
    </div>
  );
};

export default DropdownMenu;
