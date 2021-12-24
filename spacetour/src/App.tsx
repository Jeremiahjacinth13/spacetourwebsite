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
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<HomePage />} />
        <Route path="destination">
          <Route index element = {<Destination />} />
          <Route path = ":destinationName" element = {<Destination />} />
        </Route>
        <Route path="tech" element={<Technology />} />
        <Route path="crew" element={<CrewPage />} />
      </Routes>
    </AnimatePresence>
  )
}
export default SpaceTours
