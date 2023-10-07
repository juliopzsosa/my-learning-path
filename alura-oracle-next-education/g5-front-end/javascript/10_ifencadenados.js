const ciudadesDisponibles = ['Bogotá', 'Lima', 'Santiago', 'Montevideo'];

const ciudadDestino = 'Lima';
let edadPasajero = 17;
let acompañante = false;

console.log(`Verificando pasajes para ${ciudadDestino}...`);
// Verificamos que el pasajero cumple las reglas
if ((edadPasajero >= 18 || acompañante)) {

    // Evaluamos si la ciudad está disponible para viajar
    if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0)) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar');
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Pasajero no cumple con las reglas');
    }
} 