import React, { Component } from 'react';
// import firebase from './firebase';
import moment from 'moment';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();

		this.state = {
			
		};
	}
	
	componentDidMount() {
		axios({
			url: "https://app.ticketmaster.com/discovery/v2/events.json",
			params: {
				apikey: "Mh0RGGBfkgADAASrXM25WfhUueio9rgV",
				type: "music",
				name: "Drake"
			}
		}).then(response => {
			const res = response.data._embedded.events;

			moment().format();
			console.log(res)
		})
	}
	
	render() {
		return (
			<div className="App">
			
			</div>
		);
	}
}

export default App;
