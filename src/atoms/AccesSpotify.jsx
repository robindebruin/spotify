import React, { Component } from 'react';

export class AccesSpotify extends Component {

	constructor() {
		super()
		this.state = { value: 'connect to spotify' };

		this.credentials = {
			client_id: "80926ada65e247458639a354f4260ed8",
			response_type: "token",
			redirect_uri: "http:127.0.0.1:3000%2Fcallback",
			state: "123",
			scope: "user-read-private%20user-read-email",
			response_type: "token"
		}
  }

	openExAuth = () => {
		const url = `https://accounts.spotify.com/authorize?client_id=${this.credentials.client_id}&redirect_uri=${this.credentials.redirect_uri}&scope=${this.credentials.scope}&response_type=${this.credentials.response_type}&state=${this.credentials.state}`;
		window.open(url, '_self')
	};

	render() {
		return (
			<div>
				<button onClick={this.openExAuth}>click</button>
				<code> {this.state.value} </code>
			</div>
		)
	}
}
