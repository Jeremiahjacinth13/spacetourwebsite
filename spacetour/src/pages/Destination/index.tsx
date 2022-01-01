import { motion, AnimatePresence, Variants } from 'framer-motion'
import './destination.css'
import data from '../../data.json'
import { NavLink, useParams } from 'react-router-dom'

import mars from '../../assets/destination/image-mars.png'
import moon from '../../assets/destination/image-moon.png'
import europa from '../../assets/destination/image-europa.png'
import titan from '../../assets/destination/image-titan.png'

type DestinationType = {
  name: string
  images: {
    png: string
    webp?: string
  }
  description: string
  distance: string
  travel: string
}

const Destination = () => {
  const destinationImages = [moon, mars, europa, titan]

  const { destinationName } = useParams()

  const destinations: DestinationType[] = data.destinations.map(
    (destination, index) => ({
      ...destination,
      images: { ...destination.images, png: destinationImages[index] },
    }),
  )

  const destinationDistanceAnimationContainer: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  const destinationDistanceAnimation: Variants = {
    initial: {
      y: 100,
    },
    animate: {
      transition: {
        duration: 1,
      },
      y: 0,
    },
    exit: {
      y: -100,
    },
  }

  const destination: DestinationType = (function () {
    if (destinationName) {
      let destination = destinations.find(
        (destination) =>
          destinationName.toLowerCase() === destination.name.toLowerCase(),
      ) as DestinationType

      return destination
    }

    return destinations[0] as DestinationType
  })()

  return (
    <motion.main
      className="destination"
      initial={{ opacity: destinationName ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: destinationName ? 1 : 0 }}
    >
      <div className="container">
        <div>
          <p className="subheading-1">
            <span className="number">01</span>
            PICK YOUR DESTINATION
          </p>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={destination.images.png}
            alt={destination.name}
          />
        </div>
        <div>
          <div className="destination__details">
            <nav>
              {destinations.map((destination) => (
                <NavLink
                  className={({ isActive }) =>
                    `nav__navitem ${isActive && 'nav__navitem--active'} ${
                      destination.name.toLowerCase() === 'moon' &&
                      !destinationName &&
                      'nav__navitem--active'
                    }`
                  }
                  to={`/destination/${destination.name.toLowerCase()}`}
                >
                  {destination.name}
                </NavLink>
              ))}
            </nav>
            <div className="animate-down">
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="heading heading-2"
              >
                {destination.name.toUpperCase()}
              </motion.h1>
            </div>
            <div className="animate-down">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ x: '-50%', opacity: 0 }}
              >
                {destination.description}
              </motion.p>
            </div>

            <div className="divider"></div>
            <motion.div
              className="destination__distance__time__container"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={destinationDistanceAnimationContainer}
            >
              <motion.div
                variants={destinationDistanceAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p>AVG. DISTANCE</p>
                <h1 className="heading heading-5">{destination.distance}</h1>
              </motion.div>
              <motion.div
                variants={destinationDistanceAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p>EST. TRAVEL TIME</p>
                <h1 className="heading heading-5">{destination.travel}</h1>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export { Destination }
