import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'

export class Callback extends Component {

  constructor(props) {
    super(props);    
    this.callbackObject = props.location.hash && this.hashPropsToObj(props.location.hash);
    console.log('callbackObject ', this.callbackObject.access_token);
  }

  hashPropsToObj(hash) {
    const callbackWithoutHash = hash.split('#')[1]
    const callbackArray = callbackWithoutHash.split('&').map( stringObj => stringObj.split('='))
    return callbackArray.reduce((accumulator, value) => {
        accumulator[value[0]] = value[1];
        return accumulator;
      }, {})
  }

  render() {
    if (this.callbackObject) return <Redirect to='/home'  />

    return (
    <h1>not logged in</h1>
    )
  }
  
}
