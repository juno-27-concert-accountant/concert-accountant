import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Dashboard from './Dashboard';


class App extends Component {
	render() {
		return (

				
			<Router>
				<div className="App">
					<Dashboard />
				</div>
			</Router>
		);

	}

}

export default App;
