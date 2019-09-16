import React from 'react'
import reel2real from '../images/reel2real.png'
import ProjectsContainer from '../containers/ProjectsContainer'
import '../projects.css';

const Reel2Real = () => {
  return (
    <div>
    <div className="projects">
      <ProjectsContainer />
    </div>
    <div className="project-box">
      <h1>Reel 2 Real</h1>

      <div className="links">
          | <a href="" target="_blank" rel="noopener noreferrer">Demo</a> |
          | <a href="https://github.com/alcasinoroyale/film-scope" target="_blank" rel="noopener noreferrer">GitRepo</a> |
          | <a href="" target="_blank" rel="noopener noreferrer">Heroku</a> |
      </div>

      <h3>Search for a variety of films and create your own list of favorites.</h3>

      <h3><img src={reel2real} class="reel2real" alt="reel2real" /></h3>

      <ul><h4>
        <li>Integrated a Rails API with React-Redux FrontEnd through TheMovieDB</li>
        <li>Created class and functional components to handle user interaction</li>
        <li>Employed Redux Actions and Reducers to control user and film functions</li>
        <li>Designed user interface combining React and CSS styling</li>
      </h4></ul>
      </div>
    </div>
  )
}

export default Reel2Real
