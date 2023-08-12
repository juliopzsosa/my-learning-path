import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  /* Destructuración
   * const { propiedad1, propiedad2 } = props.variable
   */

  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores } = props;

  const estiloFondo = { backgroundColor: colorSecundario };
  const estiloTitulo = { borderColor: colorPrimario };

  // console.log(colaboradores.length > 0);

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={estiloFondo}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;
