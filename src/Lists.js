// import React, {Component} from 'react';
// import firebase from './firebase';
// import ConcertCard from './ConcertCard';
// import ConcertDetailsPopUp from './ConcertDetailsPopUp';
// import './LocalLists.css';


class LocalLists extends Component {
    constructor() {
        super();
        this.state = {
            wishList: [],
          //   is this already set or does this have to be added on button click?
            budgetList: []
        }
    }
  
    handleClick(e) {
      e.preventDefault();
      const wishList = firebase.database().ref('wishListItems');
      // const wishListItem = {
      //   title: this.state.currentItem,
      //   user: this.state.username
      // }
      // wishList.push(wishListItem);
      this.setState({
        wishList: ''
      //   or is it []? or {}?
      });
    }
    
  //   handleClick(e) {
  //     e.preventDefault();
  //     const listEntry = this.modalEvent;
  //     const listEntryItem = {
  //       title: this.state.currentItem,
  //       user: this.state.username
  //     }
  //     listEntry.push(listEntryItem);
  //     this.setState({
  //         eventID: this.modalEvent.id, 
  //         name: this.state.modalEvent.name,
  //         imgUrl: this.state.modalEvent.images[0].url,
  //     });
  //     console.log(listEntry)
  //     console.log(listEntryItem)
  //   }
  
  
  
  //   componentDidMount() {
  //     handleClick(e) {
  // 		e.preventDefault();
  // 		const listEntry = this.modalEvent;
  // 		const listEntryItem = {
  // 		  title: this.state.currentItem,
  // 		  user: this.state.username
  // 		}
  // 		listEntry.push(listEntryItem);
  // 		this.setState({
  // 			eventID: this.modalEvent.id, 
  // 			name: this.state.modalEvent.name,
  // 			imgUrl: this.state.modalEvent.images[0].url,
  // 		});
  // 		console.log(listEntry)
  // 		console.log(listEntryItem)
  // 	  }
  
  //   }
  
  //   componentDidUpdate() {
  //   }
  
  //   componentWillUnmount() {
  //   }
  
  //   render() {
  //       return(
  //           <div className="callToAction">
  
  //             <h1>Call To Action Placeholder Text!</h1>
  //             <h2>Select List to Operate off of</h2>
  //             <h2>Some label input radial of lists?</h2>
  //             <h2><button onClick={this.handleClick}>Press Me To Start A List</button></h2>
  //           </div>
  //       )
  //    }
  // }
  
  // export default LocalLists;
  // 
  }