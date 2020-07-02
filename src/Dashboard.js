import React, { Component } from 'react';
import axios from 'axios';
import App from './App';
import login from './Login';
import Profile from './Profile';
import MyLists from './MyLists';
import EditCity from './EditCity';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Dashboard.css';
import './App.css';
// import { render } from '@testing-library/react';

// function profile() {
//     return (
//     <div className="hello">
//         <h2>Edit my profile</h2>
//     </div>
//     )}

// function myLists() {
//     return (
//     <div>
//         <h2>Hello for additional text</h2>
//       </div>
//     )
//   }

class Dashboard extends Component {
    constructor() {
        super();
    }
    
    
    
    
    
    render() {
        const userName = 'Crenshaw';
        const userEmail = 'placeholder@msn.com';
        const userCity = 'Toronto';
        const budgetInfo = "25";
        return(
            <div className="dashboardMainDiv">
                <Link to="/profile"><a href="#">
                    Edit Profile
                </a>
                </Link>
            <h3>{userName}</h3>
            <h3>{userEmail}</h3>
            <h3>{userCity}</h3>
            {/* on click, edit profile should open a display box that allows for the modification of the following: */}
            {/* city, password */}
            {/* <Profile /> */}
            {/* Click function should open a display box that allows user to select from different lists
            and to add/remove items from list, start a new list and or modify budget amount of current list*/}
            {/* <h3><Link to="/myLists">My Lists</Link></h3> */}
            {/* <Route path="/myLists" component={MyLists} /> */}
            
            <h3>Remaining Budget: {budgetInfo}$</h3>
            
            <Link to="/myLists"><a href="#">
                My Lists</a></Link>

            <Route path="/Profile" component={Profile} />
            <Route path="/myLists" component={MyLists} />
            <Route path="/editCity" component={EditCity} />

            </div>
            )
            
            
        }       
        
        
        
        
    }
    export default Dashboard;

        // a click event must trigger a floating div in the center of the page on which the profile module is loaded.
        // Similarly, a different click event must trigger the My Lists module into appearing on screen
        // This is all probably done by link routing