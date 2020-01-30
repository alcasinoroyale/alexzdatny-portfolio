import React from 'react'
import { NavLink } from 'react-router-dom';
import resume from '../images/alex-zdatny-resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faFileAlt, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import ResponsiveMenu from 'react-responsive-navbar';

const Navbar = () => {
  return (
      <ResponsiveMenu
        menuOpenButton={<FontAwesomeIcon className="bars" icon={faBars}/>}
        menuCloseButton={<FontAwesomeIcon className="exit" icon={faTimes}/>}
        changeMenuOn="600px"
        menu={
          <div className="navMenu">
            <NavLink to="/" exact><FontAwesomeIcon className="home" icon={faHome}/> Home</NavLink>
            <a href={resume} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileAlt}/> Resume</a>
            <NavLink to="/portfolio" exact><FontAwesomeIcon icon={faSuitcase}/> Portfolio</NavLink>
            <a href="https://alexzdatny.com" target="_blank" rel="noopener noreferrer">Blog</a>
            <NavLink to="/contact" exact>Contact</NavLink>
          </div>
        }
      />
  )
}

export default Navbar
