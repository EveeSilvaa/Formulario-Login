// src/components/HomePage.js
import React from 'react';
import Link from 'next/link'; // Importe o Link do Next.js
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Bem-vindo à HomePage</h1>
      <div className={styles.imageGrid}>
        <Link href="/topic/estrelas" className={styles.imageCard}>
          <img src="/images/estrelas.jpg" alt="Estrelas" />
          <p>Estrelas</p>
        </Link>
        <Link href="/topic/planetas" className={styles.imageCard}>
          <img src="/images/planetas.jpg" alt="Planetas" />
          <p>Planetas</p>
        </Link>
        <Link href="/topic/galaxias" className={styles.imageCard}>
          <img src="/images/galaxias.jpg" alt="Galáxias" />
          <p>Galáxias</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;