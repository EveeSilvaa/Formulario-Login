import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { lightTheme, darkTheme} from "../context/ThemeContext"
import HomePage from "../components/HomePage";
import Header from '../components/Header';
import FooterForm from '../components/FooterForm';




export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <HomePage />
      <FooterForm />
    </ThemeProvider>
  );
}
