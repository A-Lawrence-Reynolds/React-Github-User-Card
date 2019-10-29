import React from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/A-Lawrence-Reynolds")
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.user.map(user => (
            <h1>user</h1>
          ))}
        </div>
        <h1>rendering?</h1>
      </div>
    );
  }
}

export default App;
