// class Dashboard extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "React",
//             showHideProfile: false,
//             showHideMyLists: false
//         };
//         this.hideComponent = this.hideComponent.bind(this);
//     }
    
//     hideComponent(name) {
//         console.log(name);
//         switch (name) {
//             case "showHideProfile":
//                 this.setState({ showHideProfile: !this.state.showHideProfile });
//                 break;
//             case "showHideMyLists":
//                 this.setState({ showHideMyLists: !this.state.showHideMyLists });
//                 break;
//                 // default: null;
//         }
//     }
   


  
//     render() {
//         const { showHideProfile, showHideMyLists } = this.state;
//         const userName = 'Crenshaw';
//         const userEmail = 'placeholder@msn.com';
//         const userCity = 'Toronto';
//         const budgetInfo = "25";
//         return(
//             <div className="dashboardMainDiv">
//                 <button onClick={ () => this.hideComponent("showHideProfile")}>
//                     My Profile
//                 </button>
//                 <button onClick={ () => this.hideComponent("showHideMyLists")}>
//                     My Lists
//                 </button>
//             <h3>{userName}</h3>
//             <h3>{userEmail}</h3>
//             <h3>{userCity}</h3>
//             {/* on click, edit profile should open a display box that allows for the modification of the following: */}
//             {/* city, password */}
//             {/* <Profile /> */}
//             {/* Click function should open a display box that allows user to select from different lists
//             and to add/remove items from list, start a new list and or modify budget amount of current list*/}
//             {/* <h3><Link to="/myLists">My Lists</Link></h3> */}
//             {/* <Route path="/myLists" component={MyLists} /> */}
            
//             <h3>Remaining Budget: {budgetInfo}$</h3>
//             </div>
//             )
            
            
//         }       
        
        
        
        
//     }
//         export default Dashboard;
