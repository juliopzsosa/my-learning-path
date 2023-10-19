import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import {
  validarNombre,
  validarApellidos,
  validarTelefono,
} from './validations';

const DatosPersonales = ({ updateStep }) => {
  const [nombre, setNombre] = useState({ value: '', valid: null });
  const [apellidos, setApellidos] = useState({ value: '', valid: null });
  const [telefono, setTelefono] = useState({ value: '', valid: null });

  const handleCampo = (setCampo, validador) => (input) => {
    const value = input.target.value;
    const valid = validador(value);
    setCampo({ value, valid });
  };

  return (
    <Box
      component='form'
      autocomplete='off'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        return (
          nombre.valid && apellidos.valid && telefono.valid && updateStep(2)
        );
      }}
    >
      <TextField
        label='Nombre'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={nombre.value}
        onChange={handleCampo(setNombre, validarNombre)}
        error={nombre.valid === false}
        helperText={nombre.valid === false && 'Ingresa un nombre válido'}
      />
      <TextField
        label='Apellidos'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={apellidos.value}
        onChange={handleCampo(setApellidos, validarApellidos)}
        error={apellidos.valid === false}
        helperText={apellidos.valid === false && 'Ingresa apellidos válidos'}
      />
      <TextField
        label='Número telefónico'
        variant='outlined'
        fullWidth
        margin='dense'
        type='number'
        value={telefono.value}
        onChange={handleCampo(setTelefono, validarTelefono)}
        error={telefono.valid === false}
        helperText={
          telefono.valid === false && 'Ingresa un número de 10 dígitos'
        }
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      <Button variant='contained' type='submit'>
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
