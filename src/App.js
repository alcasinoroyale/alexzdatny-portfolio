import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileContainer from './containers/ProfileContainer';
import About from './components/About';
import Portfolio from './components/Portfolio';
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
        <div className="routes">
          <Route exact path="/" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/portfolio" component={Portfolio}/>
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
