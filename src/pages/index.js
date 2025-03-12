// src/pages/index.js
import React from 'react';
import FormLogin from '../components/FormLogin';
import { ThemeProvider } from '../context/ThemeContext';
import Header from "../components/Header";


export default function Home() {
  return (
    <ThemeProvider>
      <div className="App">
        <FormLogin />
        <Header />
      </div>
    </ThemeProvider>
  );
}
