import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export class Callback extends Component {

  constructor(props) {
    super(props);
    this.callbackObject = props.location.hash && this.hashPropsToObj(props.location.hash);
    sessionStorage.setItem('BearerToken', `Bearer ${this.callbackObject.access_token}`);

    console.log('BearerToken ', sessionStorage.getItem('BearerToken'));
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
