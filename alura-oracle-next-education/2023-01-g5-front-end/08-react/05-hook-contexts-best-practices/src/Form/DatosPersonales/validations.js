const regex = /^[a-zA-ZáÁéÉíÍóÓúÚüÜ\s]+$/;

export const validarNombre = (nombre) => {
  return regex.test(nombre) && nombre.length > 1 && nombre.length <= 30
    ? true
    : false;
};

export const validarApellidos = (apellidos) => {
  return regex.test(apellidos) && apellidos.length > 1 && apellidos.length <= 60
    ? true
    : false;
};

export const validarTelefono = (telefono) => {
  return telefono.length === 10 ? true : false;
};
