import React from 'react'
import renecades from '../images/renecades.png'
import '../projects.css';

const Renecades = () => {
  return (
    <div className="project-box">
      <h1>Renecades Gameroom</h1>

      <div className="links">
        | <a href="https://www.youtube.com/watch?v=IehMYEGl520" target="_blank" rel="noopener noreferrer">Demo</a> |
        | <a href="https://github.com/alcasinoroyale/renecades_gameroom" target="_blank" rel="noopener noreferrer">GitRepo</a> |
        | <a href="" target="_blank" rel="noopener noreferrer">Heroku</a> |
      </div>

      <h3>Play Games, Earn Rewards, Climb the Leaderboard</h3>

      <h3><img src={renecades} class="renecades" alt="renecades" /></h3>

      <ul><h4>
        <li>Constructed a Rails API for players to build exclusive gaming profiles</li>
        <li>Illustrated user interface employing CSS for styling</li>
        <li>Utilized Active Record to manipulate data and perform database operations</li>
        <li>Built Additional Javascript Features for customization and efficiency</li>
      </h4></ul>

    </div>
  )
}

export default Renecades
