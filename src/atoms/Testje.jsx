import React, { Component } from 'react';

export class Testje extends Component {
  
  constructor(props) {
    super(props);

    this.state = { name: props.name }
  }

  hallo = () => {

    this.setState({
      name: 'Piet'
    })
  }

  render() {
    return (
      <div>
        <div> Hello {this.state.name}</div>
        <div onClick={this.hallo}>click</div>
      </div>
    )
  }
}
