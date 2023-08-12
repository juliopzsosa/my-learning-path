import "./Colaborador.css";

const Colaborador = (props) => {
  const { name, photo, team, title } = props.datos;
  const { colorPrimario } = props;

  return (
    <div className="colaborador">
      <div className="encabezado" style={{backgroundColor: colorPrimario}}>
        <img src={photo} alt={name}/>
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{title}</h5>
      </div>
    </div>
  );
};
export default Colaborador;
