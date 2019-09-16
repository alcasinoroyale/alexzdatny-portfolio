import React from 'react'
import ProjectsContainer from '../containers/ProjectsContainer'
import '../projects.css';

const ItineraryHub = () => {
  return (
    <div>
      <div class="projects">
        <ProjectsContainer />
      </div>
    <div className="project-box">
      <h1>The Itinerary Hub</h1>

      <div className="links">
        | <a href="https://www.youtube.com/watch?v=V9HRpfhfyFQ" target="_blank" rel="noopener noreferrer">Demo</a> |
        | <a href="https://github.com/alcasinoroyale/the_itinerary_hub" target="_blank" rel="noopener noreferrer">GitRepo</a> |
        | <a href="" target="_blank" rel="noopener noreferrer">Heroku</a> |
      </div>

      <h3>An organized itinerary builder for occasional and frequent travelers</h3>

      <ul><h4>
        <li>Developed a Sinatra API for users to create multiple itineraries</li>
        <li>Implemented MVC framework to structure the user interface</li>
        <li>Utilized Active Record for validations and storing user information</li>
      </h4></ul>
      </div>
    </div>
  )
}

export default ItineraryHub
