import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
  const { name, photo, equipo, title, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;

  // { Condicion ? Verdadero : Falso }

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={24}
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{title}</h5>
        {fav ? (
          <AiFillHeart size={24} color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart size={24} onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};
export default Colaborador;
