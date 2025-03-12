// src/pages/home.js
import React from 'react';
import HomePage from '../components/HomePage';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/Header';


export default function Home() {
  return (
    <ThemeProvider>
      <div className="App">
        <HomePage />
        <Header />
      </div>
    </ThemeProvider>
  );
}