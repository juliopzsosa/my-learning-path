import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { validarEmail, validarPassword } from './validations';

const DatosUsuario = ({ updateStep }) => {
    const [email, setEmail] = useState({ value: '', valid: null });
    const [password, setPassword] = useState({ value: '', valid: null });

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
        return email.valid && password.valid && updateStep(1);
      }}
    >
      <TextField
        label='Correo electrónico'
        variant='outlined'
        fullWidth
        margin='dense'
        type='email'
        value={email.value}
        onChange={handleCampo(setEmail, validarEmail)}
        error={email.valid === false}
        helperText={
          email.valid === false && 'Ingresa un correo electrónico válido'
        }
      />
      <TextField
        label='Contraseña'
        variant='outlined'
        fullWidth
        margin='dense'
        type='password'
        value={password.value}
        onChange={handleCampo(setPassword, validarPassword)}
        error={password.valid === false}
        helperText={
          password.valid === false &&
          'Ingresa una contraseña de 8 a 20 caracteres'
        }
      />
      <Button variant='contained' type='submit'>
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;
