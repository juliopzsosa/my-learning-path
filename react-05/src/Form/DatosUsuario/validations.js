export const validarEmail = (email) => {
  const lenght = email.length;
  if (lenght > 8 && lenght < 50 && email.includes('@' && '.')) {
    return true;
  } else {
    return false;
  }
};

export function validarPassword(password) {
  const lenght = password.length;
  if (lenght >= 8 && lenght <= 20) {
    return true;
  } else {
    return false;
  }
}
