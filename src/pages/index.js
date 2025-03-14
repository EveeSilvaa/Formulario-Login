import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import HomePage from "../components/HomePage";
import Header from '../components/Header';



export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}
