import React, {Component} from 'react';
import './Dashboard.css';
import './App.css';
import EditCity from './EditCity';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Profile extends Component {
  constructor() {
    super();
  }
  
  profileEditCity() {
    return(
      
      <form> 
        <fieldset>Change City</fieldset>
      </form>
    )
  
  }
  
  render() {

    const userName = 'Crenshaw'
    const userEmail = 'placeholder@msn.com';
    const userCity = 'Toronto';
    const budgetInfo = "25";
    return(
        
          <div className="profileDiv">
              <h2><Link to="/"><a href="#" className="escape">x</a></Link></h2>
              <h1>{userName}'s Profile</h1>
              <h2>Email: {userEmail}</h2>
              <h2>City: {userCity}</h2>
              <h3><Link to="/editCity"><a href="#" className="profileEditCity">Edit City</a></Link></h3>
              <h2>Current budget: ${budgetInfo}</h2>
              <h3><a href="#" className="profileEditPassword">change Password</a></h3>
              <Route path="/editCity" component={EditCity} />
          </div>
    );
    }
}

export default Profile;

// Profile should be generated onto a div from a link or button click
// Error handling:  the information should be checked against for discrepancies
// Closing the div should be done by pressing an x in the corner, OR
// if possible maybe clicking away from the div as well keeping in mind status of inputting

// Once in the div, the user should be able to change the city and change the password for their account
//clicking to change password will have to display a different version of the div,
// possibly route linking another module, in order to provide form fields like an abridged login
// to set the password again.  Similarly, the city must be changeable in a newly appearing form field
// Either on the div or in a newly revealed div replacing the main Profile div

//There must be a check against contents performed before switching to another Route in order to prevent 
//inputted information from not being recorded or completed