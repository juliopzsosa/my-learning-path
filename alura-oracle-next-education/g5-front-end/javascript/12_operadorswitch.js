const ciudadesDisponibles = ['Bogotá', 'Lima', 'Santiago', 'Montevideo'];

const ciudadDestino = 'San Juan del Río';

let valorPasaje = 0;

console.log(`El destino del viaje es la ciudad de ${ciudadDestino}`);
 
    // * Condición con 'if'
    //  if (ciudadDestino == 'Bogotá') {
    //      valorPasaje = 500;
    //  } else if (ciudadDestino == 'Lima') {
    //      valorPasaje = 400;
    //  } else if (ciudadDestino == 'Santiago') {
    //      valorPasaje = 380;
    //  } else if (ciudadDestino == 'Montevideo') {
    //      valorPasaje = 200;
    //  }

    switch(ciudadDestino) {
        case 'Bogotá':
            valorPasaje = 500;
            break;
        case 'Lima':
            valorPasaje = 400;
            break;
        case 'Santiago':
            valorPasaje = 380;
            break;
        case 'Montevideo':
            valorPasaje = 200;
            break;
        default:
            console.log("No hay pasajes para la ciudad indicada");
            break;
    }
    if (valorPasaje > 0) {
        console.log(`El valor del pasaje es ${valorPasaje}`);
    }