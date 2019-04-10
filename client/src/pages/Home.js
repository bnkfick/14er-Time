import React, { Component } from "react";


import Mtns from "../components/Mtns/";

class Home extends Component {
  state = {
    loggedIn: false
  };

  
  closeBox = (event) => {
    event.preventDefault();
    console.log("HERE I AM");
  }

  render() {
    return (
      <>
      <div className="partial-header">
        <div className="intro">
          <h2 className="spec-text">
            Your Hub for 14'er Info <br /> Weather Alerts, Driving Directions
            <br /> & Friend Connections!
          </h2>
        </div>
        <div>
          <div className="col-md-10 offset-1 spec-text">
            <div className="row align-items-center mt-4">
              <div className="col-1">
                <i className="fas fa-sliders-h fa-2x" />
              </div>
              <div className="col-11">
                <p className="text-left mb-0">
                  LogIn or Register below to save your Mountain Climbing
                  condition preferences.
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-4">
              <div className="col-1">
                <i className="fas fa-mobile-alt fa-2x" />
              </div>
              <div className="col-11">
                <p className="text-left mb-0">
                  Receive advance text notifications when climbing conditions
                  match your preferences for your favorite Colorado 14'ers!
                </p>
              </div>
            </div>
            <div className="row align-items-center mt-4">
              <div className="col-1">
                <i className="fas fa-user-friends fa-2x" />
              </div>
              <div className="col-11">
                <p className="text-left mb-0">
                  Plan a climb with friends & Get Beta on Route conditions!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="#about-close" className="row mt-5">
            <div className="col center">
                <button  type="button" className="btn btn-outline-light js-scroll-trigger btn-nav mb-5">
                    <span aria-hidden="true" onClick={this.closeBox} >Close</span>
                </button>
            </div>
        </div>
      </div>

      <Mtns></Mtns>

      </>
    );
  }
}

export default Home;
