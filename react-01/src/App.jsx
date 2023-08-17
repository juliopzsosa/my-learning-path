import { useState } from "react";
import { v4 as uuid } from "uuid";
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
      id: uuid(),
      equipo: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      title: "Instructor",
    },
    {
      id: uuid(),
      equipo: "Programación",
      photo: "https://github.com/genesysR-dev.png",
      name: "Genesys Rondón",
      title: "Desarrolladora de software e instructora",
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      title: "Instructora en Alura Latam",
    },
    {
      id: uuid(),
      equipo: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      title: "Head de Alura e Instructor",
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      title: "Dev FullStack",
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
    },
  ]);

  console.log(uuid());

  const triggerShow = () => {
    updateStatus(!showForm);
  };

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador);
    // Spread Operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    console.log("Eliminando colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id != id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, " de ", id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
  };

  return (
    <>
      <Header />
      {showForm && (
        <Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
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
