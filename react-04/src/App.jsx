import './App.css';
import FormSignUp from './Components/FormSignUp';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = (values) => {
    console.log('App.jsx:', values);
  }

  return (
    <Container component='section' maxWidth='sm'>
      <Typography variant='h3' align='center' component='h1'>Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
