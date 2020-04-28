import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput'

class App extends Component {
  state = {
    usernames: [
      { username: "Yorvin Luna", age: 29 },
      { username: "Junior Zapata", age: 30 },
      { username: "Apolinar Luna", age: 63 }
    ]
  }

  usernameHandler = (newUsername) => {
    this.setState(
      {
        usernames: [
          { username: newUsername, age: 28 },
          { username: "Indhira Luna", age: 23 }
        ]
      }
    )
  }

  switchUsernameHandler = (event) => {
    this.setState(
      {
        usernames: [
          { username: event.target.value, age: 28 },
          { username: "Darwin Luna", age: 62 },
        ]
      }
    )
  }

  render() {

    const styles = {
      marginTop: "5px",
      backgroundColor: "lightblue",
      border: "none",
      padding: "5px",
      borderRadius: "5px"
    }

    return (
      <div className="App">
        <UserInput changed={this.switchUsernameHandler} />
        <button
          style={styles}
          onClick={this.usernameHandler.bind(this, "Luz")}>Change Username
        </button>
        <UserOutput
          username={this.state.usernames[0].username}
          age={this.state.usernames[0].age}
          click={this.switchUsernameHandler.bind(this, "Dolores")} />
        <UserOutput
          username={this.state.usernames[1].username}
          age={this.state.usernames[1].age} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
