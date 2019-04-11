import React, { Component } from "react";

import Mtns from "../components/Mtns/";
import About from "../components/About/";

class Home extends Component {
  state = {
    loggedIn: false
  };


  render() {
    return (
      <>
      <About />
      <p></p>
      <Mtns></Mtns>

      </>
    );
  }
}

export default Home;
