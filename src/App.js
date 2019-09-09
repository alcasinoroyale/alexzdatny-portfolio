import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileContainer from './containers/ProfileContainer';
import ProjectsContainer from './containers/ProjectsContainer';

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
        </div>
      </Router>
      </div>
    </div>
  )
}

export default App;
