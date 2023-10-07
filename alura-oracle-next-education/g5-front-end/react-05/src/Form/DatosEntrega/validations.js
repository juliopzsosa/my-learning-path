const regex = /^[a-zA-ZáÁéÉíÍóÓúÚüÜ\s]+$/;

export const validarDireccion = (direccion) => {
  return direccion.length > 5 ? true : false;
};

export const validarCiudad = (ciudad) => {
  return ciudad.length > 3 && ciudad.length < 60 && regex.test(ciudad)
    ? true
    : false;
};

export const validarProvincia = (provincia) => {
  return provincia.length > 3 && provincia.length < 30 && regex.test(provincia)
    ? true
    : false;
};
