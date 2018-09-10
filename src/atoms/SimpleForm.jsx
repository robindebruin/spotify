import React, { Component } from 'react';

export class SimpleForm extends Component {

  constructor(props) {
    super(props);

    this.state = { name: ' ' }
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = event => {
    alert('je hebt geklikt ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <button type="submit" value="Submit">click</button>
      </form>
    )
  }
}