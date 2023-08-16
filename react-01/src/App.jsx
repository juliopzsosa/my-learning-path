import { useState } from "react";
import "./App.css";
import Header from "./components/Header/";
import Form from "./components/Form/";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [showForm, updateStatus] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      title: "Instructor",
    },
    {
      equipo: "Programación",
      photo: "https://github.com/genesysR-dev.png",
      name: "Genesys Rondón",
      title: "Desarrolladora de software e instructora",
    },
    {
      equipo: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      title: "Instructora en Alura Latam",
    },
    {
      equipo: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      title: "Head de Alura e Instructor",
    },
    {
      equipo: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      title: "Dev FullStack",
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
    },
  ]);

  const triggerShow = () => {
    updateStatus(!showForm);
  };

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador);
    // Spread Operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = () => {
    console.log("Eliminando colaborador");
  };

const actualizarColor = (color, titulo) => {
  console.log("Actualizar: ", color, " de ", titulo);
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.titulo === titulo) {
      equipo.colorPrimario = color;
    }
    return equipo;
  });
  actualizarEquipos(equiposActualizados);
};


  return (
    <>
      <Header />
      {showForm && (
        <Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <MiOrg triggerShow={triggerShow} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />
      ))}

      <Footer />
    </>
  );
}

// Línea 65
// Ternario => Condicion ? seMuestra : noSeMuestra
// Condicion && seMuestra

export default App;
