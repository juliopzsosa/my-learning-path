const ciudadesDisponibles = ['Bogotá', 'Lima', 'Santiago', 'Montevideo'];
const precioCiudad = [500,400,380,200];

const presupuestoDisponible = 210;

let i = 0;

// * While: 0 o más veces
// * Do While: 1 o más veces
while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    console.log(`Se está verificando con la ciudad de ${ciudadesDisponibles[i]}`);
    console.log(`¿Se puede costear el viaje?: ${presupuestoDisponible >= precioCiudad[i]}`);
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log(`No tenemos pasajes disponibles`);
} else {
    console.log(`Puedes comprar pasaje para la ciudad de ${ciudadesDisponibles[i]}`);
}