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

        <div className="demo">
          <iframe width="672" height="378" title="film-demo" src="https://www.youtube.com/embed/9Y_7DNIwz54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="description">
          <h4>Reel 2 Real is a React application integrated with a Rails API where users can search for a variety of films and create their own list of favorites.</h4>

        <ul><h4>
          <li>Integrated a Rails API with React-Redux FrontEnd through TheMovieDB</li>
          <li>Created class and functional components to handle user interaction</li>
          <li>Employed Redux Actions and Reducers to control user and film functions</li>
          <li>Designed user interface combining React and CSS styling</li>
        </h4></ul>

        <h2><a href="https://github.com/alcasinoroyale/film-scope" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://alexzdatny.com/reel_2_real_react-redux_portfolio_project" target="_blank" rel="noopener noreferrer">Blog Post</a></h2>
        </div>

        <h3><img src={reel2real} class="reel2real" alt="reel2real" /></h3>

      </div>
    </div>
  )
}

export default Reel2Real
