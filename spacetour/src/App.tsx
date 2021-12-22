import React from 'react'

import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HomePage } from './pages/Homepage'
import { Destination } from './pages/Destination'
import { Technology } from './pages/Technology'
import { CrewPage } from './pages/Crew'

import './App.css'
import { Header } from './components'

function SpaceTours() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <BrowserRouter>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/crew" element={<CrewPage />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default SpaceTours
