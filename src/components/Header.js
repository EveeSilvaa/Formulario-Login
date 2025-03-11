// src/components/Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Ícones de sol e lua
import styles from '../styles/Header.module.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Pagina de login</h1>
        {/* <nav className={styles.nav} >
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
            </ul>
        </nav> */}
      </div>
      <button onClick={toggleTheme} className={styles.themeButton}>
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />} {/* Ícones personalizados */}
      </button>
    </header>
  );
};

export default Header;