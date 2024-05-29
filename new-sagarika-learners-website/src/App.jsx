import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/common-components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
