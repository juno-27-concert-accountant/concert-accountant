import React, { Component } from 'react';
import "./App.css";
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar.js';
import MyLists from './MyLists';
import Login from './Login.js';
import ConcertDetailsPopUp from './ConcertDetailsPopUp.js';
import Search from './Search.js';
import ConcertCard from './ConcertCard.js';
import Landing from './Landing.js'


class App extends Component {
	constructor() {
		super();
		this.state = {
			newName: '',
            newList: '',
			newBudget: '',
			published: false,
			userSessionKey: ''
		}
	}
	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const {newName, newList, newBudget, published} = this.state;
		const userInfo = {
			name: newName,
            allLists: {
				listName: newList,
				published: published,
				budgetList: true,
				budget: newBudget,
			},
		};
        const dbRef = firebase.database().ref();
		const key = dbRef.push(userInfo).getKey();
        console.log(key);
        this.setState({
			newList: '',
			newBudget: '',
			userSessionKey: key
        })
	}
	render() {
		return (
			<Router basename="/">
				<MyLists />
			{/* <div className="App">
					
					{this.state.userSessionKey ? <MyLists id={this.state.userSessionKey} /> : null}
				<header>
      				<Navbar/>
					<Landing handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} data={this.state}/>
				</header>
				<main>
					<Search />
      				<Route path="/login/" component={Login} />
					<Route exact path="/event/" component={ConcertCard} />
					{/* Show concert details */}
					{/* <Route exact path="/event/:eventID" component={ConcertDetailsPopUp}>
						<ConcertDetailsPopUp id={this.state.userSessionKey} />
					</Route> */}
				{/* </main> */}
				{/* </div> */} 
			</Router>
		);

	}

}

export default App;
