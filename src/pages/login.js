import React from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import FormLogin from "../components/FormLogin";



export default function login() {
  return (
    <ThemeProvider>
      <FormLogin />
    </ThemeProvider>
  )
}


