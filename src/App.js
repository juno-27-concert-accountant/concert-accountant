import React, { Component } from 'react';
import "./App.css";
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.js';
import Login from './Login.js';
import ConcertDetailsPopUp from './ConcertDetailsPopUp.js';
import ConcertCard from './ConcertCard.js';


class App extends Component {
	render() {
		return (

			<Router basename="/">
				<div className="App">
					<Navbar />
					<Route path="/login/" component={Login} />

					<Route exact path="/event/" component={ConcertCard} />
					{/* <ConcertCard /> */}

					{/* Show concert details 
						:eventID
					*/}
					<Route path="/events/:eventID" component={ConcertDetailsPopUp} />
				</div>
			</Router>
		);

	}
}

export default App;
