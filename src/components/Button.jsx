import React from 'react';
import styles from '../styles/stylesForm.css';


const Button = ({type, children }) => {
  return (
    <button type={type} className={styles.button}>
        {children}
    </button>
  )
}

export default Button;