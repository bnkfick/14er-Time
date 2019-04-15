import React, { Component } from "react";

import Mtns from "../components/Mtns/";
import About from "../components/About/";
import Preferences from "../components/Preferences/";

class Home extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount () {
    console.log(this.props);
  }

  render() {
    return (
      <>
      <About />
      <p></p>
      { this.state.loggedIn ? <Preferences /> : ""}
      <Preferences />
      <p></p>
      <Mtns isLoggedIn={this.state.loggedIn}></Mtns>

      </>
    );
  }
}

export default Home;
