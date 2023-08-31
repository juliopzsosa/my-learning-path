export const validarEmail = (email) => {
  return email.length > 8 && email.length < 50 && email.includes('@' && '.')
    ? true
    : false;
};

export function validarPassword(password) {
  return password.length >= 8 && password.length <= 20 ? true : false;
}
