import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Dashboard from './Dashboard';
=======
import "./App.css";
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.js';
import Login from './Login.js';
import ConcertDetailsPopUp from './ConcertDetailsPopUp.js';
import Search from './Search.js';
import ConcertCard from './ConcertCard.js';
import Landing from './Landing.js'

>>>>>>> 135b53005e4759c6af1a9d75b62e0bdf42219928


class App extends Component {
	render() {
		return (
			<Router basename="/">
			<div className="App">
				<header>
      				<Navbar/>
					<Landing/>
				</header>
			<Search />
      		<Route path="/login/" component={Login} />

					{/* <Route exact path="/event/" component={ConcertCard} /> */}

<<<<<<< HEAD
				
			<Router>
				<div className="App">
					<Dashboard />
=======
					{/* Show concert details */}
			<Route exact path="/event/:eventID" component={ConcertDetailsPopUp} />
>>>>>>> 135b53005e4759c6af1a9d75b62e0bdf42219928
				</div>
			</Router>
		);

	}

}

export default App;
