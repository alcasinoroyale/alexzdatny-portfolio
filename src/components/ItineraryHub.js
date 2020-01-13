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

      <div class="ih-images">
        <img src="https://i.imgur.com/jF6KFWu.png" class="itineraryhub" alt="itineraryhub" />
      </div>

      <div className="content">
        <h4>The Itinerary Hub is a CRUD, MVC application built with a Sinatra framework where users can create and manage their own itineraries.</h4>

        <ul><h4>
          <li>Implemented the MVC framework to structure the user interface and handle requests</li>
          <li>Utilized Active Record for validations and storing user information</li>
          <li>Applied flash error messages and validations to verify user params</li>
        </h4></ul>
      </div>

        <div className="content-links">
          <h2><a href="https://github.com/alcasinoroyale/the_itinerary_hub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="http://alexzdatny.com/the_itinerary_hub_the_sinatra_app" target="_blank" rel="noopener noreferrer">Blog Post</a></h2>
        </div>

        <div className="demo">
          <iframe width="672" height="378" title="travel-demo" src="https://www.youtube.com/embed/V9HRpfhfyFQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default ItineraryHub
