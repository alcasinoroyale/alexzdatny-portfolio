import React from 'react'
import { NavLink } from 'react-router-dom';
import resume from '../images/alex-zdatny-resume.pdf'

const Navbar = () => {
  return (
    <div className="navMenu">
      <NavLink to="/" exact>Home</NavLink>
      <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
      <NavLink to="/portfolio" exact>Portfolio</NavLink>
      <a href="https://alexzdatny.com" target="_blank" rel="noopener noreferrer">Blog</a>
      <NavLink to="/contact" exact>Contact</NavLink>
    </div>
  )
}

export default Navbar
