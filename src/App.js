import React, { Component } from 'react';
import "./App.css";
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import ConcertDetailsPopUp from './ConcertDetailsPopUp.js';
import ConcertCard from './ConcertCard';


class App extends Component {
	render() {
		return (

			<Router>
				<div className="App">
					{/* <Login /> */}
					
					<Route exact path="/concert-accountant/" component={Login} />

					<Route path="/concert-accountant/event/" component={ConcertCard} />
					{/* <ConcertCard /> */}

					{/* Show concert details */}
					<Route exact path="/concert-accountant/event/:eventID" component={ConcertDetailsPopUp} />
				</div>
			</Router>
		);

	}
}

export default App;
