import { useState } from "react";
import "./App.css";
import Header from "./components/Header/";
import Form from "./components/Form/";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";

function App() {
  const [showForm, updateStatus] = useState(false);

  const triggerShow = () => {
    updateStatus(!showForm);
  };

  //* Ternario => Condicion ? seMuestra : noSeMuestra
  //* Condicion && seMuestra

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
      {showForm && <Form equipos={equipos.map((equipo) => equipo.titulo )}/>}
      <MiOrg triggerShow={triggerShow} />
      {equipos.map((equipo) => (<Equipo datos={equipo} key={equipo.titulo} />))}
    </>
  );
}

export default App;
