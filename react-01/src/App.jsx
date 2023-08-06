import { useState } from 'react';
import './App.css'
import Header from './components/Header/';
import Form from './components/Form/';
import MiOrg from './components/MiOrg';

function App() {

  const [showForm, updateStatus] = useState(true);

  const triggerShow = () => {
    updateStatus(!showForm);
  };
  
  //* Ternario => Condicion ? seMuestra : noSeMuestra
  //* Condicion && seMuestra

  return (
    <>
      <Header />
            {showForm && <Form />}
      <MiOrg triggerShow = {triggerShow} />
    </>
  )
}

export default App
