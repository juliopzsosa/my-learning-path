// * Alfanumérico
    // ! Si se usa 'const' genera el siguiente error: TypeError: Assignment to constant variable.
// let nombrePasajero = "Pedro Silva";
// console.log(nombrePasajero);
// nombrePasajero = "Ramón Silva"
// console.log(nombrePasajero);

// * Numérico
let valorBoleto = 1000;
const impuestoAeropuerto = 100; 
const tasaEmbarque = 60;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;
// console.log(valorBoleto);

// * Lógico
let boletoActivo = true;
// console.log(boletoActivo);

// * Operaciones aritméticas
// * Suma
// let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;
// console.log(totalBoletos);
// * Order de presedencia
    // ! '()'
    // ! '*' y '/'
    // ! '+' y '-'
// let totalBoletos = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;
// console.log(totalBoletos);

// * Concatenación de texto
// let nombrePasajero = "Leonardo";
// let apellidoPasajero = "Lacruz";
// let nombreCompleto = nombrePasajero + apellidoPasajero;
// let pasaporte = parseInt('1000') + parseInt('12');
// let multiplicación = parseInt('100') / parseFloat('10');
    // ! parseInt() convierte a entero
    // ! parseFloat() convierte a punto flotante
// console.log(nombreCompleto);
// console.log(pasaporte);
// console.log(multiplicación);

let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);
    // ! Al intentar convertir una cadena de caracteres en entero, el console.log() nos informará que NaN (Non a Number)