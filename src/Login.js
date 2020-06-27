import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            signedIn: false,
            userNew: 'true',
            userName: '',
            userEmail: '',
            userPassword: '',
            userCity: '',
            error: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCheck = () => {
        this.setState(prevState => ({
            userNew: !prevState.userNew
          }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.userName) {
            this.setState({
                error: "Please choose a username"
            })
        } else if (!this.state.userEmail) {
            this.setState({
                error: "Please enter your email"
            })
        } else if (!this.state.userPassword) {
            this.setState({
                error: "Please choose a password"
            })
        } else if (!this.state.userCity) {
            this.setState({
                error: "Please enter your city"
            })
        } else {
            // call function to set App state to show user is logged in
            // call function to hide landing page
            const isUserNew = this.state.userNew === "true" ? true : false;
            this.setState({
                userNew: isUserNew,
            })
            // const dbRef = firebase.database().ref();
            // dbRef.push(this.state);
            this.setState({
                userNew: 'true',
                userName: '',
                userEmail: '',
                userPassword: '',
                userCity: '',
                error: ''
            })
        }
    }

  render() {
      const {userNew, userName, userEmail, userPassword, userCity} = this.state
        return(
            <div className="Form">
                <h4>Login</h4>
                <form>
                    <fieldset onChange={this.handleInputChange} value={userNew}>
                        <input className="sr-only" type="radio" name="userNew" id="logIn" value="false"/>
                        <label className="form__radio" htmlFor="signUp">Sign Up</label>
                        <input className="sr-only" type="radio" name="userNew" id="signUp" value="true"/>
                        <label className="form__radio" htmlFor="logIn">Log In</label>
                    </fieldset>
                    <label htmlFor="userName"></label>
                    <input onChange={this.handleInputChange} type="text" name="userName" value={userName}/>
                    <label htmlFor="userEmail"></label>
                    <input onChange={this.handleInputChange} type="text" name="userEmail" value={userEmail}/>
                    <label htmlFor="userPassword"></label>
                    <input onChange={this.handleInputChange} type="text" name="userPassword" value={userPassword}/>
                    <label htmlFor="userCity"></label>
                    <input onChange={this.handleInputChange} type="text" name="userCity" id={userCity}/>
                    <button>{userNew === "true" ? "Sign Up" : "Login"}</button>
                </form>
            </div>
        )
    }
}

export default Login;
