import React from "react";
import More from "./More";
import "./styles.css";

class About extends React.Component {
  state = {
    aboutIsOpen: true,
    cssClasses: [ "More", "MoreOpen"]
  }
  
  toggleAbout = () => {
    if (this.state.aboutIsOpen) {
      this.setState({ 
        aboutIsOpen: false,
        cssClasses: ["More", "MoreClosed"]
       });
    } else {
      this.setState({ aboutIsOpen: true,
        cssClasses: [ "More", "MoreOpen"]
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
             
              {!this.state.aboutIsOpen ? 
              <i onClick={this.toggleAbout} className="whitesmoke  mb-4 fas fa-plus-square fa-2x"></i> :
              <button onClick={this.toggleAbout} type="button" className="btn btn-outline-light js-scroll-trigger btn-nav mb-4"><span aria-hidden="true">Close</span></button>}
              
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About;
