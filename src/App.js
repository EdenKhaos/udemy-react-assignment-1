import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "EdenKhaos"
  }

  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    const style = {
      backgroundColor: '#303030',
      color: '#eee',
      boxShadow: '0 0 15px #101010bb',
      border: '1px solid #202020',
      width: '300px',
      padding: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '30px',
      borderRadius: '6px'
    }
    return (
      <div className="App">
        <ul>
          <ol>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
        </ul>
        <UserInput username={this.state.username} changed={this.usernameChangeHandler} />
        <div id='Output1' style={style}>
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username="EdenKhaos" />
        </div>
      </div>

    );
  }
}

export default App;

