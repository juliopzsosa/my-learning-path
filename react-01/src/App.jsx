import { useState } from "react";
import "./App.css";
import Header from "./components/Header/";
import Form from "./components/Form/";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [showForm, updateStatus] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    title: "Instructor",
    },
    {
    team: "Programación",
    photo: "https://github.com/genesysR-dev.png",
    name: "Genesys Rondón",
    title: "Desarrolladora de software e instructora",
    },
    {
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    title: "Instructora en Alura Latam",
    },
    {
    team: "Programación" ,
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    title: "Head de Alura e Instructor",
    },
    {
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    title: "Dev FullStack",
  }]);  

  const triggerShow = () => {
    updateStatus(!showForm);
  };

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador: ', colaborador);
    // Spread Operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = () => {
    console.log('Eliminando colaborador');
  };

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <>
      <Header />
      {showForm && <Form 
        equipos={equipos.map((equipo) => equipo.titulo )}
        registrarColaborador={registrarColaborador}
        />
      }
        
      <MiOrg triggerShow={triggerShow} />
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.team === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          />
        )
      }

      <Footer />
    </>
  );
}

// Línea 65
// Ternario => Condicion ? seMuestra : noSeMuestra
// Condicion && seMuestra

export default App;
