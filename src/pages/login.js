import React from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import FormLogin from "../components/FormLogin";
import FooterForm from '../components/FooterForm';




export default function login() {
  return (
    <ThemeProvider>
      <FormLogin />
      {/* <FooterForm /> */}
    </ThemeProvider>
    
  )
}


