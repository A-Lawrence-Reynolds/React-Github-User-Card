import React, { Component } from "react";
import axios from "axios";
import FollowersCard from "./components/FollowerCard";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  state = {
    data: [],
    followers: [],
    users: "A-Lawrence-Reynolds"
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/A-Lawrence-Reynolds")
      .then(profileResponse => {
        console.log("Profile Response Data", profileResponse);
        this.setState({
          data: profileResponse.data
        });
        return axios.get(profileResponse.data.followers_url);
      })
      .then(followersResponse => {
        console.log(followersResponse.data);
        this.setState({
          followers: followersResponse.data
        });
      })
      .catch(error => console.log("API error "));
  }

  render() {
    return (
      <div className="App">
        <div>🔰Github User With Class Component🔰 </div>
        <div className="user-div">
          <UserCard userdata={this.state.data} />
          <FollowersCard followerdata={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
