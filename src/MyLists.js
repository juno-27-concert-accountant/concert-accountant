import React, {Component} from 'react';
import './Dashboard.css';
import firebase from './firebase';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MyLists extends Component {
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

  
  componentDidMount() {
    const sessionID = this.props.id;
    const dbRef = firebase.database().ref(`/SessionID`);
    // const key = dbRef.push(userInfo);
    // console.log(dbRef);
    dbRef.on('value', (response) => {
      const data = response.val();
      // console.log(data);
      console.log(this.props.id);
      // for(key in data) {
        // this.state 
        // }
      }
      );
    }
    
    //have to figure out what needs to happen to pull session key into state
    // The key is 
    // -MBGveceho8kTcigOPXt
    //How do I do that?

  

  //find key related to list

  //use a for in loop to grab the key

  //firebase.databse().ref(`)

  render() {


    // console.log(this.props)
    return(
        <div className="profileDiv">
          <h2>Music Lists</h2>
        <h3><a href="#" className="profilePopup">Some Music Lists</a></h3>
        <h3>Wish Lists\</h3>
        <h3>Budget List</h3>
        </div>

    );
    }
}

export default MyLists;