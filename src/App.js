import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {AccesSpotify} from './atoms/AccesSpotify';
import Callback from './atoms/Callback';
import StoreTest from './atoms/StoreTest';
import { connect } from "react-redux";


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
          <li>
            <Link to="/storetest">StoreTest</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={ConnectedHome} />
        <Route path="/login" component={AccesSpotify} />
        <Route path="/callback" component={Callback} />
        <Route path="/storetest" component={StoreTest} />
      </div>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {auth: state.auth}
}

const Home = ({auth}) => (
  <div>
    <h2>Home</h2>
    {console.log(' halo ',auth )}
    {/* <code>{auth.map(bbt => bbt)}</code> */}
    <code>{JSON.stringify(auth)}</code>
  </div>
);

const ConnectedHome = connect(mapStateToProps)(Home);

export default App;
