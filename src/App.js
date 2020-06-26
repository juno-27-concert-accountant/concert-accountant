import React, { Component } from 'react';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Login />
				</div>
			</Router>
		);
	}
}

export default App;
