import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileContainer = () => {
  return (
    <div className="profile-container">
      <h1>Alex Zdatny</h1>
      <h3>Full Stack Developer | Content Creator | Music Enthusiast </h3>
        <div className="social-media-icons">
          <a href="https://github.com/alcasinoroyale" className="github-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="git" icon={faGithubSquare}/></a>
          <a href="https://twitter.com/azdatny" className="twitter-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="twitter" icon={faTwitterSquare}/></a>
          <a href="https://www.linkedin.com/in/alex-zdatny" className="linkedin-icon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="linkedin" icon={faLinkedin}/></a>
        </div>
    </div>
  )
}

export default ProfileContainer
