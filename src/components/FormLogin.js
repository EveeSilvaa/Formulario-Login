// src/components/FormLogin.js
import React, { useState, useContext, useEffect } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/stylesForm.module.css';

const FormLogin = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false); // Estado para animação

  useEffect(() => {
    // Animação ao carregar o formulário
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({});
      // Lógica para enviar o formulário
    }
  };

  return (
    <div className={`${styles.formContainer} ${isDarkMode ? styles.dark : styles.light} ${isVisible ? styles.visible : ''}`}>
      <h1>Formulário de Login</h1> {/* Título dentro do container */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default FormLogin;