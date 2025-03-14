import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { ThemeProvider } from '../context/ThemeContext';



export default function Register() {
  return (
    <ThemeProvider>
      <RegisterForm />
    </ThemeProvider>
  );
}