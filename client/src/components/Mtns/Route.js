import React from "react";
import { Row, Col } from "reactstrap";
import "./routes.css";


class Route extends React.Component {
    state = {
        trail: this.props.trail,
        routeIsOpen: false,
        cssClasses: ["Route"]
    }

    
    toggleRoute = () => {
        if (this.state.routeIsOpen) {
            this.setState({
                routeIsOpen: false,
                cssClasses: ["Route", "RouteClosed"]
            });
        } else {
            this.setState({
                routeIsOpen: true,
                cssClasses: ["Route", "RouteOpen"]
            });
        }
        console.log("this.state.routeIsOpen " + this.state.routeIsOpen);
    }

    styleDifficulty() {
        
        if (this.state.trail.difficulty === 4) {
            return (
                <><i className="fas fa-mountain fa-2x"></i><i className="fas fa-mountain fa-2x"></i></>);
        } else if (this.state.trail.difficulty === 3) {
            return (
                <><i className="fas fa-mountain fa-2x"></i></>);
        } else if (this.state.trail.difficulty === 2) {
            return (
                <><i className="fas fa-square fa-2x"></i></>);
        } else {
            return (
                <><i className="fas fa-circle fa-2x"></i></>);
        }
    }

    styleExposure() {


        if (this.state.trail.exposure === 4) {
            return (<><div className="bg-danger progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" aria-valuenow="100"
  aria-valuemin="0" aria-valuemax="100" style={{width: 100 + '%'}}>EXTREME</div></>);
        } else if (this.state.trail.exposure === 3) {
            return (<><div className="bg-warning progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" aria-valuenow="75"
  aria-valuemin="0" aria-valuemax="100" style={{width: 75 + '%'}}>HIGH</div></>);
        } else if (this.state.trail.exposure === 2) {
            return (<><div className="progress-bar progress-bar-striped progress-bar-animated" 
            role="progressbar" aria-valuenow="50"
  aria-valuemin="0" aria-valuemax="100" style={{width: 50 + '%'}}>MODERATE</div></>);
        } else {
            return (<><div className="bg-success progress-bar progress-bar-striped progress-bar-animated"  
            role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: 25 + '%'}}>LOW</div></>);
        }
       
    };

    render() {
        return (
            <>
                <Row className="routes-row">
                    <Col md="4" className="route-name ">{this.state.trail.name}</Col>
                    <Col md="1" className="route-mileage ">{this.state.trail.mileage}</Col>
                    <Col md="1" className="route-gain ">{this.state.trail.gain}</Col>
                    <Col md="1" className="route-difficulty">{this.styleDifficulty()}</Col>
                    <Col md="3" className="route-exposure"><div className="progress align-middle" style={{height:2.5 +'em'}}>{this.styleExposure()}</div></Col>
                    <Col md="2" className="toggle-show-route-beta-btn"><i onClick={this.toggleRoute} className="fas fa-map-marked-alt fa-map-marked fa-2x"></i></Col>
                </Row>
                <Row className={this.state.cssClasses.join(' ')}>
                          Map ans Stuff
                </Row>
            </>
        );
    }
}

export default Route;
