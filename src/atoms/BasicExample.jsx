import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {AccesSpotify} from './AccesSpotify';
import {Callback} from './Callback';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">AccesSpotify</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={AccesSpotify} />
      <Route path="/auth" component={AccesSpotify} />
      <Route path="/callback" component={Callback} />
      <Route path="/home" component={Home} />

    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


export default BasicExample;