// * Palabra const
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);
const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";
console.log(nombrePasajero);
console.log(apellidoPasajero);



// Bloque
{
    // * Palabra let
    // Espacio de memoria que pueda cambiar durante la ejecución
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;

    // * Palabra var
    // Espacio de memoria que pueda cambiar durante la ejecución
    // ! El puede acceder a 'var' desde cualquier parte del código
    var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

    console.log("Variable con 'let': " + nombreCompletoPasajero);
    console.log("Variable con 'var': " + nombreCompletoDelPasajero);
}

// * console.log("Variable con 'let': " + nombreCompletoPasajero);
// ! No permite su impresión en pantalla ya que se encuentra dentro de un bloque
console.log("Variable con 'var': " + nombreCompletoDelPasajero);