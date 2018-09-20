import React, { Component } from 'react';
import './App.css';
// import {Router, Route, Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {AccesSpotify} from './atoms/AccesSpotify';
import {Callback} from './atoms/Callback';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">AccesSpotify</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={AccesSpotify} />
        <Route path="/callback" component={Callback} />
      </div>
    </Router>
    );
  }
}


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


export default App;
