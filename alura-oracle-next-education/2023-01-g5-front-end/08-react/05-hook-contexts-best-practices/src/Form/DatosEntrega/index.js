import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import {
  validarDireccion,
  validarCiudad,
  validarProvincia,
} from './validations';

const DatosEntrega = ({ updateStep }) => {
  const [direccion, setDireccion] = useState({ value: '', valid: null });
  const [ciudad, setCiudad] = useState({ value: '', valid: null });
  const [provincia, setProvincia] = useState({ value: '', valid: null });

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
          direccion.valid && ciudad.valid && provincia.valid && updateStep(3)
        );
      }}
    >
      <TextField
        label='Dirección'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={direccion.value}
        onChange={handleCampo(setDireccion, validarDireccion)}
        error={direccion.valid === false}
        helperText={direccion.valid === false && 'Ingresa una dirección válida'}
      />
      <TextField
        label='Ciudad'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={ciudad.value}
        onChange={handleCampo(setCiudad, validarCiudad)}
        error={ciudad.valid === false}
        helperText={ciudad.valid === false && 'Ingresa una ciudad válida'}
      />
      <TextField
        label='Estado/Provincia'
        variant='outlined'
        fullWidth
        margin='dense'
        type='text'
        value={provincia.value}
        onChange={handleCampo(setProvincia, validarProvincia)}
        error={provincia.valid === false}
        helperText={provincia.valid === false && 'Ingresa una provincia válido'}
      />
      <Button variant='contained' type='submit'>
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
