import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { LogoSpace, MainSpace, FormSpace, Img } from './styles';
import DatosUsuario from './DatosUsuario';
import DatosPersonales from './DatosPersonales';
import DatosEntrega from './DatosEntrega';
import Complete from './Complete';
import Stepper from '../Stepper';
import Step from './Step';
import { validarEmail, validarPassword } from './DatosUsuario/validations';
import {
  validarNombre,
  validarApellidos,
  validarTelefono,
} from './DatosPersonales/validations';
import {
  validarDireccion,
  validarCiudad,
  validarProvincia,
} from './DatosEntrega/validations';

const Form = () => {
  const [step, setStep] = useState(0);

  const updateStep = (step) => {
    console.log('Actualizar a paso ', step);
    setStep(step);
  };
  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  };

  const onSubmit = () => {};

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: 'Correo electrónico',
          type: 'email',
          value: '',
          valid: null,
          helperText: 'Ingresa un correo electrónico válido',
          onChange: () => {},
          validator: validarEmail,
        },
        {
          label: 'Contraseña',
          type: 'password',
          value: '',
          valid: null,
          helperText: 'Ingresa una contraseña de 8 a 20 caracteres',
          onChange: () => {},
          validator: validarPassword,
        },
      ],
      buttonText: 'Siguiente',
      onSubmit,
    }/* ,
    1: {
      inputs: [
        {
          label: 'Nombre',
          type: 'text',
          value: nombre.value,
          valid: nombre.valid,
          helperText: 'Ingresa un nombre válido',
          onChange: handleCampo(setNombre, validarNombre),
          validator: validarNombre,
        },
        {
          label: 'Apellidos',
          type: 'text',
          value: apellidos.value,
          valid: apellidos.valid,
          helperText: 'Ingresa apellidos válidos',
          onChange: handleCampo(setApellidos, validarApellidos),
          validator: validarApellidos,
        },
        {
          label: 'Número telefónico',
          type: 'number',
          value: telefono.value,
          valid: telefono.valid,
          helperText: 'Ingresa un número de 10 dígitos',
          onChange: handleCampo(setTelefono, validarTelefono),
          validator: validarTelefono,
        },
      ],
      buttonText: 'Siguiente',
      onSubmit,
    2: {
      inputs: [
        {
          label: 'Dirección',
          type: 'text',
          value: direccion.value,
          valid: direccion.valid,
          helperText: 'Ingresa una dirección válida',
          onChange: handleCampo(setDireccion, validarDireccion),
          validator: validarDireccion,
        },
        {
          label: 'Ciudad',
          type: 'text',
          value: ciudad.value,
          valid: ciudad.valid,
          helperText: 'Ingresa una ciudad válida',
          onChange: handleCampo(setCiudad, validarCiudad),
          validator: validarCiudad,
        },
        {
          label: 'Estado/Provincia',
          type: 'text',
          value: provincia.value,
          valid: provincia.valid,
          helperText: 'Ingresa una provincia válida',
          onChange: handleCampo(setProvincia, validarProvincia),
          validator: validarProvincia,
        },
      ],
      buttonText: 'Crear cuenta',
      onSubmit: () => {
        if (direccion.valid && ciudad.valid && provincia.valid) {
          updateStep(3);
        }
      },
    },
    3: {
      inputs: [],
      buttonText: 'Finalizar',
      onSubmit: () => {
        // You can define the final submission logic here
      },
    }, */
  };

  return (
    <Box
      sx={{
        padding: '30px',
        display: 'flexbox',
        flexDirection: 'column',
      }}
    >
      <LogoSpace>
        <Img src={'/favicon.png'} />
        <Typography variant='h3'>AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step}/>
      </FormSpace>
    </Box>
  );
};

export default Form;
