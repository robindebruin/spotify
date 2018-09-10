import React, { Component } from 'react';
const axios = require('axios');

export class FirstAxiosTest extends Component {
  
  constructor() {
    super()

    this.state = { value: 'bla bla' }
  }

  getSomething = () => {
    axios.get('https://api.github.com/users/robindebruin')
      .then(response => {
        this.setState({ value: response.data.name })
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getSomething}>click</button>
        <div> {this.state.value} </div>
      </div>
    )
  }
}
