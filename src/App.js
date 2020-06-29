import React, { Component } from 'react';

import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Budget from './Budget.js';


class App extends Component {
	render() {
		return (

			<Router>
				<div className="App">
					<Login />
				</div>
				<Budget />
			</Router>
		);

	}
}

export default App;
