import React, { Component } from 'react';
// import firebase from './firebase';
import ConcertCard from './ConcertCard.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<p>Hello</p>
				<ConcertCard />
			</div>
		)
	}
}

export default App;
