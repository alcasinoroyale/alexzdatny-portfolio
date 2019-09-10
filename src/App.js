import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileContainer from './containers/ProfileContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import About from './components/About';
import Contact from './components/Contact';
import ItineraryHub from './components/ItineraryHub';
import Reel2Real from './components/Reel2Real';
import Renecades from './components/Renecades'

const App = () => {
  return(
    <div className="App">
      <div className="container">
      <Router>
        <Route>
          <Navbar />
        </Route>
          <ProfileContainer />
          <ProjectsContainer />
        <div className="routes">
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/the-itinerary-hub" component={ItineraryHub}/>
          <Route exact path="/reel2real" component={Reel2Real}/>
          <Route exact path="/renecades-gameroom" component={Renecades}/>
        </div>
      </Router>
      </div>
    </div>
  )
}

export default App;
