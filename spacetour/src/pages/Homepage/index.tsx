import React from 'react'
// import { Header } from '../../components'
import './homepage.css'

const HomePage: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className="container__text">
          <p className="subheading-1">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="heading heading-1">SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="container__button">
          <div className="main__button__container">
            <button className="heading heading-4">EXPLORE</button>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export { HomePage }
