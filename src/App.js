import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Budget from './Budget';

class App extends Component {
	

		render() {
			return (
				<div className="App">

				<Budget />
			</div>
		);
	}
}

export default App;
