import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Pages/Navbar'
import LoginForm from './Components/Forms/LoginForm'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} /> 
      <Route path="/login" element={<LoginForm />} /> 
    </Routes>
    </>
  )
}

export default App
