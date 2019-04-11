import React from "react";
import { Alert, Col } from 'reactstrap';
import styled from 'styled-components';
import More from "./More";
import "./styles.css";

class About extends React.Component {
  state = {
    aboutIsOpen: true,
    cssClasses: [ "Modal", "ModalOpen"]
  }
  
  toggleAbout = () => {
    if (this.state.aboutIsOpen) {
      this.setState({ 
        aboutIsOpen: false,
        cssClasses: ["Modal", "ModalClosed"]
       });
    } else {
      this.setState({ aboutIsOpen: true,
        cssClasses: [ "Modal", "ModalOpen"]
       });
    }
    console.log("this.state.aboutIsOpen " + this.state.aboutIsOpen);
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
          <div className={this.state.cssClasses.join(' ')}>
            {/* {this.state.aboutIsOpen ?  <More></More> : ''} */}
            <More aboutIsOpen="this.state.aboutIsOpen" />
          </div>
          <div id="#about-close" className="row mt-4">
            <div className="col center">
              <button onClick={this.toggleAbout} type="button" className="btn btn-outline-light js-scroll-trigger btn-nav mb-4">
                <span aria-hidden="true" >{this.state.aboutIsOpen ? 'Close' : 'More'}</span>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About;
