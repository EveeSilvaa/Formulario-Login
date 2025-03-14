import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Pagina de login</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/about">Sobre</Link></li>
            <li><Link href="/services">Estudos</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.authButtons}>
        <Link href="/login">
          <button className={styles.button}>Login</button>
        </Link>
        <Link href="/register">
          <button className={styles.button}>Cadastro</button>
        </Link>
        <button onClick={toggleTheme} className={styles.themeButton}>
          {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;