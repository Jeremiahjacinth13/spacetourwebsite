import React from 'react'
import { motion } from 'framer-motion'

import './destination.css'

const Destination = () => {
  return (
    <motion.main 
      className='destination'
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
    >

    </motion.main>
  )
}

export { Destination }
