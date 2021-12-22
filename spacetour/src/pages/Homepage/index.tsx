import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './homepage.css'

const HomePage: React.FC = () => {
  const currentPath = useLocation().pathname

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`homepage ${currentPath === '/' && 'active'}`}
    >
      <div className="container">
        <div className="container__text">
          <p className="subheading-1">SO, YOU WANT TO TRAVEL TO</p>
          <div className="animate-down">
            <h1 className="heading heading-1">SPACE</h1>
          </div>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="container__button">
          <div className="main__button__container">
            <button className="heading heading-4">
              <Link to="/destination">EXPLORE</Link>
            </button>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export { HomePage }
