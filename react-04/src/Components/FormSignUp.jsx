import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [prom, setProm] = useState(true);
  const [news, setNews] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, surname, email, prom, news });
      }}
    >
      <TextField
        id='name'
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <TextField
        id='surname'
        label='Apellidos'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => {
          setSurname(e.target.value);
        }}
        value={surname}
      />
      <TextField
        id='email'
        label='E-mail'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={prom}
              onChange={(e) => setProm(e.target.checked)}
            />
          }
          label='Promociones'
        />
        <FormControlLabel
          control={
            <Switch
              checked={news}
              onChange={(e) => setNews(e.target.checked)}
            />
          }
          label='Novedades'
        />
      </FormGroup>
      <Button variant='contained' type='submit'>
        Registrarse
      </Button>
    </form>
  );
}
export default FormSignUp;
