// * Operadores de comparación

const valorPasaje = '1000';

// ! '==' es Igualdad Abstracta
// ! '===' es Igualdad Estricta
if (valorPasaje === '1000') {
    console.log(`El pasaje vale 1000`);
}


const ciudadDestino = 'Lima';
const ciudadesDisponibles = ['Bogotá', 'Lima', 'Santiago', 'Montevideo'];

// * Operadores lógicos
// AND (y), OR (o) y NO (negación)

let edadPasajero = 17;
let acompañante = true;

// Palabra reservada 'if'
// Evalua una condición

// ! Si entrega '-1' es porque el valor de 'ciudadDestino' no está en el array

console.log(`Verificando pasajes para ${ciudadDestino}...`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18 || acompañante == true)) {
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar');
}

edadPasajero = 17;
acompañante = false;

// Aplicando negaciones

if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18 || acompañante == true))) {
    console.log('Ciudad no disponible para viajar');
} else {
    console.log('Pasaje disponible para venta');
}

