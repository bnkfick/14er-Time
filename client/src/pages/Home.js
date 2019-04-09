import React, { Component } from "react";

class Home extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
        <div>
          <h2 class="spec-text">Your Hub for 14'er Info  <br />  Weather Alerts, Driving Directions<br />  & Friend Connections!</h2>
        </div>
    );
  }
}

export default Home;


