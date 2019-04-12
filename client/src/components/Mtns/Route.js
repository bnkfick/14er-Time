import React from "react";
import { Row, Col } from "reactstrap";
import "./routes.css";



const Route = props => {

    return (
        <>
        
            <Row>
                <Col className="route-name ">{props.name}</Col>
                <Col className="route-mileage ">{props.name}</Col>
                <Col className="route-gain ">{props.name}</Col>
                <Col className="route-difficulty ">{props.name}</Col>
                <Col className="route-exposure ">
                    progress bar for exposure
                    </Col>
                <Col className="toggle-show-route-beta-btn mt-4"><i className="fas fa-map-marked-alt fa-map-marked fa-2x"></i></Col>
            </Row>
        </>
    );
};

export default Route;
