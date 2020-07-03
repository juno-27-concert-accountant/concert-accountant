import React, {Component, Fragment} from 'react';
import firebase from './firebase';


class Landing extends Component {
  constructor() {
      super();
      this.state = {
          newName: '',
          newList: '',
          newBudget: '',
          published: false
      }
  }
    render() {
        const {newName, newList, newBudget} = this.props.data
        return(
                <div className="wrapper header__wrapper">
                    <section className="header__left">
                        <h1>Concert
                        <br/>Accountant</h1>
                        <h2>Set your budget.
                        <br/>Browse concerts.
                        <br/>Add them to your list.
                        <br/>Let us worry about the math.</h2>
                    </section>
                    <section className="header__right">
                        <h4>Start budgeting <em>now</em>:</h4>
                        <hr/>
                        <form className="header__form">
                            <label htmlFor="newName">Your name</label>
                            <input onChange={this.props.handleInputChange}  name="newName" type="text" value={newName}/>
                            <label htmlFor="newList">Your genre</label>
                            <input onChange={this.props.handleInputChange}  name="newList" type="text" value={newList}/>
                            <label htmlFor="newBudget">Your budget</label>
                            <input onChange={this.props.handleInputChange}  name="newBudget" type="text" value={newBudget}/>
                            <button onClick={this.props.handleSubmit}>Start now</button>
                        </form>
                    </section>
                </div>
        )
    }
}

export default Landing;
