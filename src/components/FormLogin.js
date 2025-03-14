import React, { useState, useContext, useEffect } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/stylesForm.module.css';
import Link from 'next/link';

const FormLogin = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      // envia para formulário e redirecionar para a HomePage
      window.location.href = '/home'; // redirecionando temporáriamente 
    }
  };

  return (
    <div className={`${styles.formContainer} ${isVisible ? styles.visible : ''}`}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit" className={styles.button}>Login</button>
        <p className={styles.forgotPassword}>
          <Link href="/">Esqueceu a senha?</Link>
        </p>
        <button type="button" className={styles.registerButton}>
          <Link href="/register">Cadastre-se</Link>
        </button>
      </form>
    </div>
  );
};

export default FormLogin;