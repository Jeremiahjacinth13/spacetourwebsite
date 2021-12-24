import React, { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

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

  const homeNavLInk = useRef<HTMLAnchorElement>()
  const destinationNavLink = useRef<HTMLAnchorElement>()
  const crewNavLink = useRef<HTMLAnchorElement>()
  const techNavLink = useRef<HTMLAnchorElement>()

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

  //FIXME: change 0 to the value of the currently active nav link
  const [activeNavLinkIndex, setActiveNavLinkIndex] = useState<number>(0)

  const [underlinePosition, setUnderlinePosition] = useState<string>(
    getUnderlineNewPosition(
      navElementRef.current?.getBoundingClientRect().x as number,
      navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect()
        .width as number,
      navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect()
        .x as number,
      50,
    ),
  )

  useEffect(() => {
    if (currentLocation === navLinksPath[0]) {
      setActiveNavLinkIndex(0)
    } else {
      setActiveNavLinkIndex(
        navLinksPath.findIndex(
          (path) =>
            path !== navLinksPath[0] &&
            new RegExp(`${path}`).test(currentLocation),
        ),
      )
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation])

  useEffect(() => {
    setUnderlinePosition(
      getUnderlineNewPosition(
        navElementRef.current?.getBoundingClientRect().x as number,
        navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect()
          .width as number,
        navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect()
          .x as number,
        50,
      ),
    )
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeNavLinkIndex])

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="company logo" />
      </Link>

      {/*@ts-ignore*/}
      <nav className="nav" ref={navElementRef}>
        {navLinks.map((navLink, index) => (
          <NavLink
            key={index}
            // @ts-ignore
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
        <ActiveLinkUnderline
          left={underlinePosition}
          width={
            navLinkElements[activeNavLinkIndex].current?.getBoundingClientRect()
              .width + 'px'
          }
        />
      </nav>
    </header>
  )
}

const ActiveLinkUnderline: React.FC<{ left: string; width: string }> = ({
  left,
  width,
}) => {
  return <div className="activeLinkUnderline" style={{ left, width }}></div>
}
