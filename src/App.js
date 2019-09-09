import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <div className="container">
      <Router>
        <Route>
        <h1>Alex Zdatny Portfolio</h1>
        </Route>
        <div className="routes">
        </div>
      </Router>
      </div>
    </div>
  )
}

export default App;
