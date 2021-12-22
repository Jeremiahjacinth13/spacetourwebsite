import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Homepage'
import { Destination } from './pages/Destination'
import { Technology } from './pages/Technology'
import { CrewPage } from './pages/Crew'

import './App.css'
import { Header } from './components'

function SpaceTours() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/crew" element={<CrewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default SpaceTours
