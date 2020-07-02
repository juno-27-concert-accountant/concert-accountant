import React, {Component} from 'react';
import './Dashboard.css';
import './App.css';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class EditCity extends Component {
  constructor() {
    super();
  }

  //Kat's login top command
//   handleInputChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }


render() {
    const userCity = 'Toronto';
    return(
        <div className="profileDiv">
            <h2><Link to="/"><a href="#" className="escape">x</a></Link></h2>
            {/* <>
                <label htmlFor="userCity"></label>
                {/* <input onChange={this.handleInputChange} type="text" name="userCity" id={userCity}/> */}
                <h2>This is where to change the city</h2>
            <h3>Old City: {userCity}</h3>
            <form>
                <label>
                <h3>Input New City: </h3>
                <input type="text" name="userCity" />
                </label>
                <input type="submit" value="Submit" />
            </form>

                
            {/* </form> */}
        </div>
    )
}



}





export default EditCity;