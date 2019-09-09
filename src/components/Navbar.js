import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navMenu">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/about" exact>About</NavLink>
      <a href="https://alexzdatny.com" target="_blank" rel="noopener noreferrer">Blog</a>
      <NavLink to="/contact" exact>Contact</NavLink>
    </div>
  )
}

export default Navbar
