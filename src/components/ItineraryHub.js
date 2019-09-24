import React from 'react'
import itineraryhub from '../images/itinerary-hub.png'
import ihprofile from '../images/ih-profile.png'
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

      <div className="demo">
        <iframe width="672" height="378" title="itineraryhub" src="https://www.youtube.com/embed/V9HRpfhfyFQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="description">
        <h4>The Itinerary Hub is CRUD, MVC application built with a Sinatra framework.
        This app gives users the ability to create their own itineraries.
        Each itinerary has a travel guide and schedule as well as destinations that users can build.
        All of user data is handled in the SQLitle3 database and can be accessed by Active Record.
        Users have access to the Itinerary index where they can share their ideas with other occassional and frequent travelers.</h4>

        <h2><a href="https://github.com/alcasinoroyale/the_itinerary_hub" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="http://alexzdatny.com/the_itinerary_hub_the_sinatra_app" target="_blank" rel="noopener noreferrer">Blog Post</a></h2>

      </div>

        <div class="ih-images">
          <img src={itineraryhub} class="itineraryhub" alt="itineraryhub" />
          <img src={ihprofile} class="ihprofile" alt="ihprofile" />
        </div>

      </div>
    </div>
  )
}

export default ItineraryHub
