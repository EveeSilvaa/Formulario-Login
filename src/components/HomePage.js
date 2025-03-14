import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';


const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>O que você vai criar hoje?</h1>
      <p>Com o Canva, é fácil criar, compartilhar e imprimir designs profissionais.</p>

      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <h2>Quadros brancos</h2>
          <p>Pesquisar</p>
        </div>
        <div className={styles.gridItem}>
          <h2>Apresentações</h2>
          <p>Apresente</p>
        </div>
        <div className={styles.gridItem}>
          <h2>Redes sociais</h2>
          <p>Redes sociais</p>
        </div>
        <div className={styles.gridItem}>
          <h2>Vídeos</h2>
          <p>Vídeos</p>
        </div>
        <div className={styles.gridItem}>
          <h2>Impressões</h2>
          <p>Impressões</p>
        </div>
        <div className={styles.gridItem}>
          <h2>Esperamos por você!</h2>
        </div>
      </div>

      <div className={styles.workProcess}>
        <h2>Processo de trabalho</h2>
        <ul>
          <li>Apresentação</li>
          <li>Apresentações com facilidade</li>
          <li>Apresentações com seu post</li>
        </ul>
      </div>

      <Link href="/login">
        <button className={styles.loginButton}>Login</button>
      </Link>
    </div>
  );
};

export default HomePage;