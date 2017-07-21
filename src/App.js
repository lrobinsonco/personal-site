import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Lee</h1>
      <div className="navbar-link">
      <h4 className="col-sm-4"><Link to="/projects">Projects</Link></h4>
      <h4 className="col-sm-4"><Link to="/">About Me</Link></h4>
      <h4 className="col-sm-4"><Link to="/contact">Contact Me</Link></h4>
      </div>
      </div>
    );
  }
}

export default App;
