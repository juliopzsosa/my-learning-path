const ciudad1 = 'Bogotá';
const ciudad2 = 'Lima';
const ciudad3 = 'Santiago';

// * Array
// Para evitar declarar múltiples variables, se recomienda usar arrays (listas)
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago');
// console.log(ciudadesDisponibles);

// * Definición abreviada de una lista
const paisesDisponibles = ['Colombia', 'Perú', 'Chile', 'Brasil', 'Argentina'];
// console.log(paisesDisponibles);

// * Método 'push'
paisesDisponibles.push('Uruguay');
ciudadesDisponibles.push('Montevideo');
// console.log(ciudadesDisponibles);
// console.log(paisesDisponibles);

// * Método 'unshift'
paisesDisponibles.unshift('Ecuador');
ciudadesDisponibles.unshift('Quito');
console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

// Mostrando el segundo elemento de la lista
    // let valor = 1;
    // console.log (paisesDisponibles[valor]);
    // console.log (ciudadesDisponibles[valor]);

paisesDisponibles.splice(1,2,'Venezuela','Paraguay','Surinam');
console.log(paisesDisponibles);

