import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import resume from '../images/alex-zdatny-resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ResponsiveMenu from 'react-responsive-navbar';

class Navbar extends Component {
  render() {
  return (
      <ResponsiveMenu
        menuOpenButton={<FontAwesomeIcon className="bars" icon={faBars}/>}
        menuCloseButton={<FontAwesomeIcon className="exit" icon={faTimes}/>}
        changeMenuOn="530px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <div className="navMenu">
            <NavLink to="/" exact>Home</NavLink>
            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            <NavLink to="/portfolio" exact>Portfolio</NavLink>
            <a href="https://alexzdatny.com" target="_blank" rel="noopener noreferrer">Blog</a>
            <NavLink to="/contact" exact>Contact</NavLink>
          </div>
        }
      />
    )
  }
}

export default Navbar
