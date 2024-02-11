import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../profile.css'

const ProfileContainer = () => {
  return (
    <div className="profile-container">
      <h1>Alex Zdatny</h1>
      <h2>Full Stack Developer • Content Creator • Music Enthusiast</h2>
        <div className="social-media-icons">
          <a href="https://github.com/alcasinoroyale" className="github-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="git" icon={faGithubSquare}/></a>
          <a href="https://www.instagram.com/alcasinoroyale" className="instagram-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="instagram" icon={faInstagramSquare}/></a>
          <a href="https://www.linkedin.com/in/alex-zdatny" className="linkedin-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="linkedin" icon={faLinkedin}/></a>
        </div>
    </div>
  )
}

export default ProfileContainer
