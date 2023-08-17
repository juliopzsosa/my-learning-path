import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = (props) => {
  const { name, photo, equipo, title, id } = props.datos;
  const { colorPrimario, eliminarColaborador } = props;

  return (
    <div className="colaborador">
    <AiFillCloseCircle size={24} className="eliminar" onClick={() => eliminarColaborador(id)} />
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
