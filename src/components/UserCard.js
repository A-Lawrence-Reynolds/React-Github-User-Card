import React from "react";
import "../App.css";

const UserCard = props => {
  const { name } = props.userdata;
  const { avatar_url } = props.userdata;
  const { html_url } = props.userdata;
  return (
    <div className="user-container">
      <h3>{name}</h3>
      <img src={avatar_url}></img>
      <h3>{html_url}</h3>
    </div>
  );
};

export default UserCard;
