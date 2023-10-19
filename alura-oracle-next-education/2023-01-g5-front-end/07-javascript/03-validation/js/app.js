// Importa la función 'valida' desde el archivo 'validaciones.js'
import { valida } from "./validaciones.js";

// Obtiene todos los elementos <input> del documento
const inputs = document.querySelectorAll("input");

// Agrega un evento de escucha a cada campo de entrada
inputs.forEach((input) => {
  // Cuando el campo de entrada pierde el foco ('blur'), se dispara el evento y se ejecuta la función anónima
  input.addEventListener("blur", (input) => {
    // Llama a la función 'valida' y pasa el elemento <input> que disparó el evento ('input.target')
    valida(input.target);
  });
});
