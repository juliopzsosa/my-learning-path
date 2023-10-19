const ciudadesDisponibles = ['Bogotá','Lima','Santiago','Montevideo'];
const paisesDisponibles = ['Colombia','Perú','Chile','Brasil','Argentina','Uruguay','Venezuela'];

console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} elementos.`);

const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos.`);
console.log(ciudadesDisponibles);

// Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos.`);

// Remover el último elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos.`);

// Filtrado de elementos
const paisesFiltrados = paisesDisponibles.filter(e => e.startsWith('C'));
console.log(paisesFiltrados);

// Unificar los elementos en una cadena
console.log(paisesDisponibles.join('-'));

// Ordernar los elementos
console.log(paisesDisponibles.sort());

// Conociendo la posición
console.log(`Perú está en la posición ${paisesDisponibles.indexOf('Perú')}`);

// Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);

