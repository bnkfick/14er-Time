import React, { Component } from "react";

import Mtns from "../components/Mtns/";
import About from "../components/About/";
import Preferences from "../components/Preferences/";

class Home extends Component {
  state = {
    loggedIn: false
  };


  render() {
    return (
      <>
      <About />
      <p></p>
      { this.state.loggedIn ? <Preferences /> : ""}
      <Preferences />
      <p></p>
      <Mtns></Mtns>

      </>
    );
  }
}

export default Home;
