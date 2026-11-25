import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Pages/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} /> 

    </Routes>
    </>
  )
}

export default App
