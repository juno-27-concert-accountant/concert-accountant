import React, { Component } from 'react';
// import firebase from './firebase';
import './App.css';
import axios from 'axios';

class App extends Component {
	componentDidMount() {
		axios({
			url: "https://app.ticketmaster.com/discovery/v2/events.json",
			params: {
				apikey: "Mh0RGGBfkgADAASrXM25WfhUueio9rgV",
				type: "music",
				
			}
		}).then(response => {
			const res = response.data._embedded.events;
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
