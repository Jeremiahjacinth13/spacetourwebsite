import { motion } from 'framer-motion'
import React, { useState } from 'react'

import data from '../../data.json'

import douglas from '../../assets/crew/image-douglas-hurley.png'
import mark from '../../assets/crew/image-mark-shuttleworth.png'
import victor from '../../assets/crew/image-victor-glover.png'
import anousheh from '../../assets/crew/image-anousheh-ansari.png'

import './crew.css'

const CrewPage = () => {
  type CrewMember = {
    name: string
    role: string
    bio: string
    images: {
      png: string
      webp?: string
    }
  }

  const [currentMemberIndex, setCurrentMemberIndex] = useState<number>(3)

  const crewImages = [douglas, mark, victor, anousheh]

  const crewMembers: CrewMember[] = data.crew.map((crewMember, index) => ({
    ...crewMember,
    images: { ...crewMember.images, png: crewImages[index] },
  }))

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="crew"
    >
      <div className="container">
        <div>
          <p className="subheading-1">
            <span className="number">02</span>
            MEET YOUR CREW
          </p>

          <div className="animate-down">
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 0.5}}
              exit={{ y: -50, opacity: 0 }}
              className="heading heading-4"
            >
              {crewMembers[currentMemberIndex].role.toUpperCase()}
            </motion.h4>
          </div>

          <div className="animate-down">
            <h3 className="heading heading-3">
              {crewMembers[currentMemberIndex].name.toUpperCase()}
            </h3>
          </div>

          <p className="bio">{crewMembers[currentMemberIndex].bio}</p>
        </div>
        <Dots
          crewMembersLength={crewMembers.length}
          setCrewIndex={setCurrentMemberIndex}
          crewIndex={currentMemberIndex}
        />
        <div>
          <div className="image__container">
            <img src={crewMembers[currentMemberIndex].images.png} alt="" />
          </div>
        </div>
      </div>
    </motion.main>
  )
}

interface DotsProps {
  setCrewIndex: React.Dispatch<React.SetStateAction<number>>
  crewIndex: number
  crewMembersLength: number
}

const Dots: React.FC<DotsProps> = ({
  crewIndex,
  setCrewIndex,
  crewMembersLength,
}) => {
  return (
    <div className="dots__container">
      {Array(crewMembersLength)
        .fill(0)
        .map((_dummyStuff, index) => (
          <motion.div
            whileHover={{ scale: 1.3 }}
            className={`dot ${crewIndex === index && 'active'}`}
            onClick={() => setCrewIndex(index)}
          ></motion.div>
        ))}
    </div>
  )
}
export { CrewPage }
