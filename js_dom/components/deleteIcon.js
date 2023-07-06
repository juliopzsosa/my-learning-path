// Crea un elemento de ícono de eliminación y agrega un evento de clic para eliminar la tarea correspondiente
const deleteIcon = () => {
  // Crea un elemento <i> para el ícono
  const i = document.createElement('i');
  // Agrega las clases CSS necesarias para mostrar el ícono de eliminación
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  // Agrega un evento de clic para eliminar la tarea
  i.addEventListener('click', deleteTask);
  return i;
};

// Función para eliminar la tarea correspondiente al hacer clic en el ícono de eliminación
const deleteTask = (event) => {
  const parent = event.target.parentElement;
  // Elimina el elemento padre (la tarea) del DOM
  parent.remove();
};

// Exporta la función deleteIcon para poder ser utilizada en otros archivos
export default deleteIcon;
