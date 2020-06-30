import React, { Component } from 'react';

import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import ConcertDetailsPopUp from './ConcertDetailsPopUp.js';
import ConcertCard from './ConcertCard';
import Search from './Search';


class App extends Component {
	render() {
		return (

			<Router>
				<div className="App">
					<Login />
					<Search/>
					<Route exact path="/event/" component={ConcertCard} />

					{/* Show concert details */}
					<Route exact path="/event/:eventID" component={ConcertDetailsPopUp} />
				</div>
			</Router>
		);

	}
}

export default App;
