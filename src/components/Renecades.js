import React from 'react'
import ProjectsContainer from '../containers/ProjectsContainer'
import renecades from '../images/renecades.png'
import '../projects.css';

const Renecades = () => {
  return (
    <div>
    <div className="projects">
      <ProjectsContainer />
    </div>
    <div className="project-box">
      <h1>Renecades Gameroom</h1>

      <div className="demo">
        <iframe width="672" height="378" title="gameroom" src="https://www.youtube.com/embed/IehMYEGl520" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="description">
        <h4>Renecades Gameroom is a rails application that allows users to create their own exclusive gaming profiles, earn rewards, and compete against other players in the leaderboard.</h4>

        <ul><h4>
          <li>Constructed a Rails API for players to build exclusive gaming profiles</li>
          <li>Illustrated user interface employing CSS for styling</li>
          <li>Utilized Active Record to manipulate data and perform database operations</li>
          <li>Engineered OAuth feature to provide access for Facebook logins</li>
          <li>Built Additional Javascript Features for customization and efficiency</li>
        </h4></ul>

        <h2>
          <a href="https://github.com/alcasinoroyale/renecades_gameroom_with_js" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://alexzdatny.com/rails_with_js_project_expanding_renecades" target="_blank" rel="noopener noreferrer">Blog Post</a>
          <a href="https://renecades-gameroom-javascript.herokuapp.com" target="_blank" rel="noopener noreferrer">Heroku</a>
        </h2>

      </div>

      <h3><img src={renecades} class="renecades" alt="renecades" /></h3>

      </div>
    </div>
  )
}

export default Renecades
