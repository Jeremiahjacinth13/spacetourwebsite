import { motion } from 'framer-motion'
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
          {/* <pre>{JSON.stringify(destination, null, 3)}</pre> */}
          <img src={destination.images.png} alt={destination.name} />
        </div>
        <div>
          <nav>
            {destinations.map((destination) => (
              <NavLink to={`/destination/${destination.name.toLowerCase()}`}>
                {destination.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </motion.main>
  )
}

export { Destination }
