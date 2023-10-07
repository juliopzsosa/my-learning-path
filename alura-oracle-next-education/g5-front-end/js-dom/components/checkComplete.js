// Crea un elemento de ícono de verificación y agrega un evento de clic para cambiar su estado
const checkComplete = () => {
  // Crea un elemento <i> para el ícono
  const i = document.createElement('i');
  // Agrega las clases CSS necesarias para mostrar el ícono de verificación
  i.classList.add('far', 'fa-check-square', 'icon');
  // Agrega un evento de clic para cambiar el estado del ícono
  i.addEventListener('click', completeTask);
  return i;
};

// Función para cambiar el estado del ícono de verificación
const completeTask = (event) => {
  const element = event.target;
  // Alterna las clases CSS para mostrar el estado de completado o incompleto de la tarea
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
};

// Exporta la función checkComplete para poder ser utilizada en otros archivos
export default checkComplete;