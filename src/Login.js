import React, {Component, Fragment} from 'react';
import './Login.css'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedOn: false,
            userNew: true,
            userName: '',
            userEmail: '',
            userPassword: '',
            userCity: '',
            userNameError: false,
            userEmailError: false,
            userPasswordError: false,
            userCityError: false
        }
    }   
    handleRadioChange = (e) => {
        const isUserNew = e.target.value === "true" ? true : false;
            this.setState({
                userNew: isUserNew,
                userEmailError: false,
                userCityError: false
            })
    }
    validateInput = (input) => {
        const field = input.name;
        const inputRegex = {
            // username must be between 5 and 10 characters
            userName: /^[a-z0-9]([._](?![._])|[a-z0-9])[a-z0-9]{3,8}$/,
            // email must be email format
            userEmail: /^([a-z0-9_ .-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
            // password 6-20 characters
            userPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
            // city only allows letters, special letter characters, and punctuation regularly found in city names
            userCity: /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
        }
        const stateError = field + "Error";
        if (inputRegex[field].test(input.value)) {
            input.className = "fieldSuccess"
            console.log(stateError);
            this.setState({
                [stateError]: false
            })
        } else {
            input.className = "fieldError"
            this.setState({
                [stateError]: true
            })
        }
    }
    handleInputChange = (e) => {
        this.validateInput(e.target);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.userNameError && !this.state.userEmailError && !this.state.userPasswordError && !this.state.userCityError) {
            this.setState({
                isLoggedIn: true
            })
            // some sort of notification about fixing 
        } else {
            // call function to set App state to show user is logged in
            // call function to hide landing page
            // const dbRef = firebase.database().ref();
            // dbRef.push(this.state); (will be modified to only push the login data)
        }
    }

  render() {
    const {userNew, userName, userEmail, userPassword, userCity, userNameError, userEmailError, userPasswordError, userCityError} = this.state
      const space = <span className="form__space"></span>;
        return(
            <div className="Form">
                <form>
                    <fieldset onChange={this.handleRadioChange} value={userNew}>
                        <div className={userNew ? "form--active radio" : "radio"}>
                            <label htmlFor="signUp">Sign Up</label>
                            <input className="sr-only" type="radio" name="userNew" id="signUp" value="true"/>
                        </div>
                        <div className={!userNew ? "form--active radio" : "radio"}>
                            <label htmlFor="logIn">Log In</label>
                            <input className="sr-only" type="radio" name="userNew" id="logIn" value="false"/>
                        </div>
                    </fieldset>
                    <div className="form__container">
                        <label htmlFor="userName">Username</label>
                        <input onChange={this.handleInputChange} type="text" name="userName" value={userName}/>
                        {userNameError ? <p>Username must be between 5 and 8 characters</p> : space}
                        {userNew ? 
                            <Fragment>
                                <label htmlFor="userEmail">Email address</label>
                                <input onChange={this.handleInputChange} type="text" name="userEmail" value={userEmail}/>
                                {userEmailError ? <p>Please enter a valid email address</p> : space}
                            </Fragment>: 
                            null}
                        <label htmlFor="userPassword">Password</label>
                        <input onChange={this.handleInputChange} type="text" name="userPassword" value={userPassword}/>
                        {userPasswordError ? <p>Password must be between 6 and 8 characters</p> : space}
                        {userNew ? 
                        <Fragment>
                            <label htmlFor="userCity">Home city</label>
                            <input onChange={this.handleInputChange} type="text" name="userCity" id={userCity}/>
                            {userCityError ? <p>Please remove special characters</p> : space}
                        </Fragment> :
                        null}
                        <button onClick={this.handleSubmit}>{userNew ? "Sign Up" : "Login"}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
