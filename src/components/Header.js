import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import Sidebar from './sideBar';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Usuário');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const name = localStorage.getItem('userName') || 'Usuário';
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    window.location.reload();
  };

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.logo}>
        <h1>TravelMaster</h1>
        {isLoggedIn && (
          <nav className={styles.nav}>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/about">Sobre</Link></li>
              <li><Link href="/services">Estudos</Link></li>
            </ul>
          </nav>
        )}
      </div>
      <div className={styles.authButtons}>
        {!isLoggedIn ? (
          <>
            <Link href="/login">
              <button className={styles.button}>Login</button>
            </Link>
            <Link href="/register">
              <button className={styles.button}>Cadastro</button>
            </Link>
          </>
        ) : (
          <div className={styles.userSection}>
            <div className={styles.userInfo}>
              <img
                src="/images/user-icon.png"
                alt="Usuário"
                className={styles.userImage}
                onClick={() => setIsSidebarOpen(true)}
              />
              <span>Bem-vindo, {userName}</span>
            </div>
          </div>
        )}
        <button onClick={toggleTheme} className={styles.themeButton}>
          {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;