// src/components/RegisterForm.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/RegisterForm.module.css'; 


const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro realizado:', { name, email, password, phone, newsletter });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formColumn}>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Nome Completo</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Telefone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              Desejo receber nossas atualizações por E-mail
            </label>
          </div>
          <button type="submit" className={styles.button}>Cadastrar</button>
          <p className={styles.loginLink}>
            Já tem uma conta? <Link href="/">Faça login</Link>
          </p>
        </form>
      </div>
      <div className={styles.imageColumn}>
        <img src="/images/tecnologic.jpg" alt="Universo" className={styles.image} />
      </div>
    </div>
  );
};

export default RegisterForm;