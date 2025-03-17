import React from 'react';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.sidebarOverlay} onClick={onClose}>
      <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <ul className={styles.ul} >
          <li><Link href="/profile">Perfil</Link></li>
          <li><Link href="/settings">Configurações</Link></li>
          <li><Link href="/help">Ajuda</Link></li>
          <li><Link href="/logout">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;