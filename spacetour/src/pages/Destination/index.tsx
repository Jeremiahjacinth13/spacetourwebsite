import React from 'react'
import { motion } from 'framer-motion'
import moon from '../../assets/destination/image-moon.png'
import './destination.css'

const Destination = () => {
  return (
    <motion.main
      className="destination"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div>
          <p className="subheading-1">
            <span className="number">01</span>
            PICK YOUR DESTINATION
          </p>
          <img src={moon} alt="" />
        </div>
        <div>
          {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit
          magnam, ullam minus velit ducimus necessitatibus, dolorem rerum
          voluptatem fuga beatae. Ea odit maxime magni earum asperiores quam
          accusantium dolorem inventore, rem ducimus quod velit excepturi, quo
          sapiente, aspernatur nam? Assumenda libero incidunt, natus fuga quas
          facere animi distinctio aliquam?
          </p> */}
        </div>
      </div>
    </motion.main>
  )
}

export { Destination }
