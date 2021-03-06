import React, { Component } from "react";
import { UserConsumer } from "../context";
import Mtns from "../components/Mtns/";
import About from "../components/About/";
import Preferences from "../components/Preferences/";

class Home extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.setState({
      loggedIn: this.props.loggedIn
    })
  }

  render() {
    return (
      <>
        <About />
        <p></p>

        <UserConsumer>
          {({ data, logout }) => {
            console.log(data.user);
            if (data.loggedIn) {

              return <Preferences user={data.user} />
            }
          }
          }
        </UserConsumer>

        <p></p>
        <Mtns isLoggedIn={this.state.loggedIn}></Mtns>

      </>
    );
  }
}

export default Home;
