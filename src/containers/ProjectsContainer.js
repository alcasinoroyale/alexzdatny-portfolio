import React from 'react';
import { Link } from 'react-router-dom';
import '../projects.css';

const ProjectsContainer = () => {
  return (
    <div className="projects">
      <h2>Portfolio Projects</h2>
        <Link to="/the-itinerary-hub"><button><h3>The Itinerary Hub</h3></button></Link>
        <Link to="/reel2real"><button><h3>Reel 2 Real</h3></button></Link>
        <Link to="/renecades-gameroom"><button><h3>Renecades Gameroom</h3></button></Link>
    </div>
  )
}

export default ProjectsContainer
