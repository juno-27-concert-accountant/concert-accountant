import React, {Component, Fragment} from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            signedIn: false,
            userNew: true,
            userName: '',
            userEmail: '',
            userPassword: '',
            userCity: '',
            error: {
                email: '',
                username: '',
                password: '',
                city: '',

            }
        }
    }
    handleRadioChange = (e) => {
        const isUserNew = e.target.value === "true" ? true : false;
            this.setState({
                userNew: isUserNew,
            })
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
            // const dbRef = firebase.database().ref();
            // dbRef.push(this.state); (will be modified to only push the login data)
            this.setState({
                userNew: true,
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
                <form>
                    <fieldset onChange={this.handleRadioChange} value={userNew}>
                        <label className="form__radio" htmlFor="logIn">Log In</label>
                        <input type="radio" name="userNew" id="logIn" value="false"/>
                        <label className="form__radio" htmlFor="signUp">Sign Up</label>
                        <input type="radio" name="userNew" id="signUp" value="true"/>
                    </fieldset>
                    <label htmlFor="userName">Username</label>
                    <input onChange={this.handleInputChange} type="text" name="userName" value={userName}/>
                    {userNew ? 
                        <Fragment>
                            <label htmlFor="userEmail">Email address</label>
                            <input onChange={this.handleInputChange} type="text" name="userEmail" value={userEmail}/>
                        </Fragment>: 
                        null}
                    <label htmlFor="userPassword">Password</label>
                    <input onChange={this.handleInputChange} type="text" name="userPassword" value={userPassword}/>
                    {userNew ? 
                    <Fragment>
                        <label htmlFor="userCity">Home city</label>
                        <input onChange={this.handleInputChange} type="text" name="userCity" id={userCity}/>
                    </Fragment> :
                    null}
                    <button onClick={this.handleSubmit}>{userNew ? "Sign Up" : "Login"}</button>
                </form>
            </div>
        )
    }
}

export default Login;
