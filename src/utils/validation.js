export const validateEmail = (email) => {
  if (!email) return 'Email é obrigatório';
  if (!/\S+@\S+\.\S+/.test(email)) return 'Email inválido';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Senha é obrigatória';
  if (password.length < 6) return 'Senha deve ter pelo menos 6 caracteres';
  return '';
};