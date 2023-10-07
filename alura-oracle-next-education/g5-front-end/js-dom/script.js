// Importa la función checkComplete desde el archivo checkComplete.js
import checkComplete from './components/checkComplete.js';
// Importa la función deleteIcon desde el archivo deleteIcon.js
import deleteIcon from './components/deleteIcon.js';

// Obtiene el botón de envío del formulario mediante el atributo data-form-btn
const btn = document.querySelector('[data-form-btn]');

// Función para crear una tarea y agregarla a la lista
const createTask = (evento) => {
  evento.preventDefault();
  // Obtiene el campo de entrada de texto del formulario mediante el atributo data-form-input
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  // Obtiene la lista de tareas mediante el atributo data-list
  const list = document.querySelector('[data-list]');
  // Crea un nuevo elemento de lista para representar la tarea
  const task = document.createElement('li');
  // Agrega la clase CSS "card" al elemento de la tarea
  task.classList.add('card');
  // Limpia el campo de entrada de texto
  input.value = '';
  // Crea un nuevo elemento div para contener el contenido de la tarea
  const taskContent = document.createElement('div');
  // Crea un nuevo elemento span para mostrar el título de la tarea
  const titleTask = document.createElement('span');
  // Agrega la clase CSS "task" al elemento del título de la tarea
  titleTask.classList.add('task');
  // Establece el texto del elemento del título de la tarea con el valor del campo de entrada de texto
  titleTask.innerText = value;
  // Agrega el ícono de verificación a través de la función checkComplete
  taskContent.appendChild(checkComplete());
  // Agrega el elemento del título de la tarea al elemento de contenido de la tarea
  taskContent.appendChild(titleTask);
  // Agrega el elemento de contenido de la tarea al elemento de la tarea
  task.appendChild(taskContent);
  // Agrega el ícono de eliminación a través de la función deleteIcon
  task.appendChild(deleteIcon());
  // Agrega la tarea a la lista de tareas
  list.appendChild(task);
};

// Agrega un evento de escucha al botón de envío del formulario para ejecutar la función createTask
btn.addEventListener('click', createTask);