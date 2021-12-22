import React, { useEffect, useState, useRef, Ref, RefObject } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import logo from '../assets/shared/logo.svg'
import { getUnderlineNewPosition } from '../helper'
import './header.css'

export const Header: React.FC = () => {
  type CustomNavLink = {
    to: string
    title: string
  }

  const navLinks: CustomNavLink[] = [
    { to: '/', title: 'Home' },
    { to: '/destination', title: 'Destination' },
    { to: '/crew', title: 'Crew' },
    { to: '/tech', title: 'Technology' },
  ]

  const homeNavLInk = useRef<HTMLElement>()
  const destinationNavLink = useRef<HTMLElement>()
  const crewNavLink = useRef<HTMLElement>()
  const techNavLink = useRef<HTMLElement>()

  const navElementRef = useRef<HTMLElement>()

  const navLinkElements = [
    homeNavLInk,
    destinationNavLink,
    crewNavLink,
    techNavLink,
  ]

  // to keep track of the current location so as to animate the active nav object
  const currentLocation = useLocation().pathname

  const navLinksPath = navLinks.map((link) => link.to)

  const [activeNavLinkIndex, setActiveNavLinkIndex] = useState<number>(
    navLinksPath.indexOf(currentLocation),
  )

  const [underlinePosition, setUnderlinePosition] = useState<string>(
    getUnderlineNewPosition(
        navElementRef.current?.getBoundingClientRect().x as number,
        navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect().width as number,
        navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect().x as number,
        50
    )
  )

  useEffect(() => {
    setActiveNavLinkIndex(navLinksPath.indexOf(currentLocation))
    
    setUnderlinePosition(getUnderlineNewPosition(
        navElementRef.current?.getBoundingClientRect().x as number,
        navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect().width as number,
        navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect().x as number,
        50
    ));
    
  }, [currentLocation, navLinksPath])

  return (
    <header>
      <img src={logo} alt="company logo" />
      <nav className="nav" ref={navElementRef}>
        {navLinks.map((navLink, index) => (
          <NavLink
            key={index}
            ref={navLinkElements[index]}
            className={({ isActive }) =>
              `nav__navitem ${isActive && 'nav__navitem--active'}`
            }
            to={navLink.to}
          >
            <span className="nav__item__number">
              {String(index).padStart(2, '0')}
            </span>
            <span className="nav__item__title">{navLink.title}</span>
          </NavLink>
        ))}
        <ActiveLinkUnderline currentPosition={underlinePosition} />
      </nav>
    </header>
  )
}

const ActiveLinkUnderline: React.FC<{ currentPosition: string }> = ({
  currentPosition,
}) => {
  return (
    <div
      className="activeLinkUnderline"
      style={{ left: currentPosition }}
    ></div>
  )
}
