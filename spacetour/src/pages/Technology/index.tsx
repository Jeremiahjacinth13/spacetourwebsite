import { motion } from 'framer-motion'
import React from 'react'
import './tech.css'

const Technology = () => {
  return (
    <motion.main
      className="tech"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    </motion.main>
  )
}

export { Technology }
