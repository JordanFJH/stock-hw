import { useState, useContext } from 'react'
import Nav from './Nav'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import StockPage from './pages/StockPage'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/stocks' element={<Dashboard />} />
        <Route path='/stocks/:symbol' element={<StockPage />} />
      </Routes>
    </div>
  )
}

export default App
