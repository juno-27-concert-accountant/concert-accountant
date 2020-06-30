import React, {Component} from 'react';
import './Dashboard.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MyLists extends Component {
  constructor() {
      super();
  }

  render() {

    const userName = 'Crenshaw'
    const userEmail = 'placeholder@msn.com';
    const userCity = 'Toronto';
    const budgetInfo = "25";
    return(
        
        <div className="profileDiv">
          <h2><Link to="/"><a href="#" className="escape">x</a></Link></h2>
        <h3><a href="#" className="profilePopup">Some Music Lists</a></h3>
        <h2>Aqua</h2>
        <h2>N Sync</h2>
        <h2>BackStreet Boys</h2>
          </div>
    );
    }
}

export default MyLists;