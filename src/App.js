import React, { Component } from 'react';
import "./App.css";
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.js';
import Login from './Login.js';
import ConcertDetailsPopUp from './ConcertDetailsPopUp.js';
import Search from './Search.js';
import ConcertCard from './ConcertCard.js';



class App extends Component {
	render() {
		return (

			<Router basename="/">
				<div className="App">
      		<Navbar />

					<Search/>
      		<Route path="/login/" component={Login} />
					{/* <Route exact path="/event/" component={ConcertCard} /> */}

					{/* Show concert details */}
					<Route exact path="/event/:eventID" component={ConcertDetailsPopUp} />
				</div>
			</Router>
		);

	}
}

export default App;
