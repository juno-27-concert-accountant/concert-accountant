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

  // https://console.firebase.google.com/project/concert-accountant-cca1f/database/concert-accountant-cca1f/data/-MBHHUuah2kyAgF_s_2d


  componentDidMount() {
    // const sessionID = '-MBHHUuah2kyAgF_s_2d';
    const sessionID = this.props.id;
    const dbRef = firebase.database().ref(`/${sessionID}`);
    // const key = dbRef.push(userInfo);
    // console.log(dbRef);
    dbRef.on('value', (response) => {
      const data = response.val();
      console.log(data);
      // console.log(this.props.id);
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

// export default LocalLists;

// import React, {Component} from 'react';
// import './Dashboard.css';
// import firebase from './firebase';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// class MyLists extends Component {
//   constructor() {
//       super();
//       // SessionID = -MBGveceho8kTcigOPXt,
//       this.state = {
//       	  newName: '',
//           newList: '',
//           newBudget: '',
// 			    published: false,
// 		    	userSessionKey: ''
//       }
//   }

  
//   componentDidMount() {
//     const sessionID = this.props.id;
//     const userSessionKey = '-MBGveceho8kTcigOPXt';
//     const dbRef = firebase.database().ref(`/SessionID`);

//     dbRef.on('value', (response) => {
//       const data = response.val();
//       dbRef.on('value', (user) => {
//       });

//       const dbRef = firebase.database().ref();


//       dbRef.on('value', (data) => {

//       console.log(data.val());
// });
//       console.log(this.props.id);
//       console.log(user.val());
//       const key = dbRef.push(userInfo);
//       console.log(dbRef);
//       console.log(data);
//       dbRef.on('value', (snapshot) => {
//         console.log(snapshot.val());
//       });
//       for(key in data) {
//         this.state 
//         }
//       },
//       // );
//     // }
    
//     //have to figure out what needs to happen to pull session key into state
//     // The key is 
//     // -MBGveceho8kTcigOPXt
//     //How do I do that?

  

//   //find key related to list

//   //use a for in loop to grab the key

//   firebase.databse().ref()

//   render() {


//     // console.log(this.props)
//     return(
//         <div className="profileDiv">
//           <h2>Music Lists</h2>
//         <h3><a href="#" className="profilePopup">Some Music Lists</a></h3>
//         <h3>Wish Lists</h3>
//         <h3>Budget List</h3>
//         </div>

//   );
//     }
// }


// export default MyLists;


