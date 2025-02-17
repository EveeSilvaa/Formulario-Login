export const validationForm = (values) => {
    const errors = [];
    if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
      errors.push('Email inválido.');
    }
    if (!values.password || values.password.length < 6) {
      errors.push('A senha deve ter pelo menos 6 caracteres.');
    }
    return errors;
  };

