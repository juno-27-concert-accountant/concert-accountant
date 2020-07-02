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
            <Fragment>
                <section>
                    <h1>Concert Accountant</h1>
                    <h2>Set your budget. Browse concerts you want to see. Add them to your list. Let us worry about the math.</h2>
                </section>
                <section>
                    <form>
                        <h4>Start budgeting now</h4>
                        <label htmlFor="newName">Your name</label>
                        <input onChange={this.props.handleInputChange}  name="newName" type="text" value={newName}/>
                        <label htmlFor="newList">Your list</label>
                        <input onChange={this.props.handleInputChange}  name="newList" type="text" value={newList}/>
                        <label htmlFor="newBudget">Your budget</label>
                        <input onChange={this.props.handleInputChange}  name="newBudget" type="text" value={newBudget}/>
                        <button onClick={this.props.handleSubmit}>Start saving now</button>
                    </form>
                </section>
            </Fragment>
        )
    }
}

export default Landing;
