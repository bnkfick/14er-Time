import React from "react";
import { Row, Col } from "reactstrap";
import "./routes.css";



const Route = props => {

    function styleDifficulty() {


        if (props.trail.difficulty === 4) {
            return (
                <><i class="fas fa-mountain fa-2x"></i><i class="fas fa-mountain fa-2x"></i></>);
        } else if (props.trail.difficulty  === 3) {
            return (
                <><i class="fas fa-mountain fa-2x"></i></>);
        } else if (props.trail.difficulty  === 2) {
            return (
                <><i class="fas fa-square fa-2x"></i></>);
        } else {
            return (
                <><i class="fas fa-circle fa-2x"></i></>);
        }

    } 

    return (
        <>
        
            <Row className="routes-row">
                <Col md="4" className="route-name ">{props.trail.name}</Col>
                <Col md="1" className="route-mileage ">{props.trail.mileage}</Col>
                <Col md="1" className="route-gain ">{props.trail.gain}</Col>
                <Col md="1" className="route-difficulty ">{styleDifficulty()}</Col>
                <Col md="3"className="route-exposure ">
                    progress bar for exposure
                </Col>
                <Col md="2" className="toggle-show-route-beta-btn"><i className="fas fa-map-marked-alt fa-map-marked fa-2x"></i></Col>
            </Row>
        </>
    );
};

export default Route;
