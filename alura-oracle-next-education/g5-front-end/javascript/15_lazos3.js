const datos = [
    { 'ciudad': 'Bogotá', 'precio': 500 },
    { 'ciudad': 'Lima', 'precio': 400 },
    { 'ciudad': 'Santiago', 'precio': 380 },
    { 'ciudad': 'Montevideo', 'precio': 200 },
];

const presupuestoDisponible = 199;

// * For: Una cantidad delimitada de veces

for (var i = 0; i < datos.length; i++) {
    console.log(`Se está verificando con la ciudad de ${datos[i].ciudad}`);
    console.log(`¿Se puede costear el viaje?: ${presupuestoDisponible >= datos[i].precio}`);
    if (presupuestoDisponible >= datos[i].precio) {
        console.log(`Puedes comprar pasaje para la ciudad de ${datos[i].ciudad}`);
        break;
    }
}

if (i == datos.length) {
    console.log(`No tenemos pasajes disponibles`);
}
