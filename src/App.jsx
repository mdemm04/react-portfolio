import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import { NavBars } from './components/NavBars'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App