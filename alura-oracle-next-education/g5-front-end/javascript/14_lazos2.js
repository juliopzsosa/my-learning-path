const datos = [
    { 'ciudad': 'Bogotá', 'precio': 500 },
    { 'ciudad': 'Lima', 'precio': 400 },
    { 'ciudad': 'Santiago', 'precio': 380 },
    { 'ciudad': 'Montevideo', 'precio': 200 },
];

const presupuestoDisponible = 3700;
let i = 0;

// * While: 0 o más veces
/* while (i < datos.length && datos[i].precio > presupuestoDisponible) {
    console.log(`Se está verificando con la ciudad de ${datos[i].ciudad}`);
    console.log(`¿Se puede costear el viaje?: ${presupuestoDisponible >= datos[i].precio}`);
    i++;
    }
    if (i == datos.length) {
        console.log(`No tenemos pasajes disponibles`);
    } else {
        console.log(`Puedes comprar pasaje para la ciudad de ${datos[i].ciudad}`);
    }
*/

// * Do While: 1 o más veces
do {
    console.log(`Se está verificando con la ciudad de ${datos[i].ciudad}`);
    console.log(`¿Se puede costear el viaje?: ${presupuestoDisponible >= datos[i].precio}`);
    if (presupuestoDisponible >= datos[i].precio) {
        console.log(`Puedes comprar pasaje para la ciudad de ${datos[i].ciudad}`);
        break;
    } else {
        i++;
    }
} while (i < datos.length);

if (i == datos.length) {
    console.log(`No tenemos pasajes disponibles`);
}


