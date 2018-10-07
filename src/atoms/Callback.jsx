import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { addBearerToken } from '../actions';
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
  return {
    addBearerToken: bbToken => dispatch(addBearerToken(bbToken))
  }
}

class ConnectedCallback extends Component {

  constructor(props) {
    super(props);
    this.callbackObject = props.location.hash && this.hashPropsToObj(props.location.hash);
    this.props.addBearerToken(this.callbackObject)
  }

  hashPropsToObj(hash) {
    const callbackWithoutHash = hash.split('#')[1]
    const callbackArray = callbackWithoutHash.split('&').map(stringObj => stringObj.split('='))
    const callbackObject = callbackArray.reduce((accumulator, value) => {
      accumulator[value[0]] = value[1];
      return accumulator;
    }, {})
    return callbackObject
  }

  render() {
    if (this.callbackObject) return <Redirect to='/' />
    return (
      <h1>not logged in</h1>
    )
  }
}

const Callback = connect(null, mapDispatchToProps)(ConnectedCallback);
export default Callback;
