import React, { Component } from 'react';

export class Callback extends Component {

  constructor(props) {
    super(props);    
    const callbackObject = this.hashPropsToObj(props.location.hash);
    console.log('callbackObject ', callbackObject);
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
    return (
      <h1>callback</h1>
    )
  }
}
