// Función que realiza la validación del campo de entrada
export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  // Obtiene el tipo de input del atributo "data-tipo" del elemento de entrada

  // Si existe un validador correspondiente al tipo de input, llámalo
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  
  // Verifica si el input es válido según las validaciones HTML5
  if (input.validity.valid){
    // Si es válido, remueve las clases de error y vacía el mensaje de error
    input.parentElement.classList.remove('input-container--invalid');
    input.parentElement.querySelector('.input-message-error').innerHTML = '';
  } else {
    // Si no es válido, agrega las clases de error y muestra el mensaje de error correspondiente
    input.parentElement.classList.add('input-container--invalid');
    input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  }
}

// Lista de posibles tipos de errores
const tipoDeErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError',
];

// Mensajes de error para cada tipo de input y tipo de error
const mensajesDeError = {
  nombre: {
    valueMissing: 'Este campo "Nombre" no puede estar vacío.',
  },
  email: {
    valueMissing: 'Este campo "Email" no puede estar vacío.',
    typeMismatch: 'El correo no es válido.',
  },
  password: {
    valueMissing: 'Este campo "Contraseña" no puede estar vacío.',
    patternMismatch: 'Al menos 6 caracteres, máximo 12. Debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.'
  },
  nacimiento: {
    valueMissing: 'Este campo "Fecha de nacimiento" no puede estar vacío.',
    customError: 'Debes tener al menos 18 años de edad.'
  }
}

// Objeto de validadores personalizados para tipos de input específicos
const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

// Devuelve el mensaje de error correspondiente al tipo de input y tipo de error
function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = '';
  // Recorre los posibles tipos de errores
  tipoDeErrores.forEach(error => {
    // Si el input tiene el error específico, obtén el mensaje de error correspondiente
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

// Función de validación personalizada para el tipo de input "nacimiento"
function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  // Verifica si el usuario es mayor de edad
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }

  // Establece la validez personalizada del input
  input.setCustomValidity(mensaje);
}

// Verifica si la fecha es mayor de edad en comparación con la fecha actual
function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate(),
  );
  return diferenciaFechas <= fechaActual;
}