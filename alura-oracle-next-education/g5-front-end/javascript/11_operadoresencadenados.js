const ciudadesDisponibles = ['Bogotá', 'Lima', 'Santiago', 'Montevideo'];

const ciudadDestino = 'Bogotá';
let edadPasajero = 18;
let acompañante = true;
let pasaporte = true;
let casadx = false;

// A && (B || C)
console.log(`Verificando pasajes para ${ciudadDestino}...`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18 && pasaporte && !casadx) {
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar');
}