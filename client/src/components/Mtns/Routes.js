import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Route from "./Route";
import "./routes.css";

class Routes extends Component {
    state = {
        trails: this.props.trails
    };

    componentDidMount() {
        console.log(this.state.trails);
    }

    render() {
        return (
            <>
                <Row className="routes-header routes-row">
                    <Col md="4">Route Name</Col>
                    <Col md="1">Mileage</Col>
                    <Col md="1">Gain (ft.)</Col>
                    <Col md="1">Difficulty</Col>
                    <Col md="3">Fall Exposure</Col>
                    <Col md="2">Route Beta</Col>
                </Row>
                { this.state.trails.map(trail => {
                    return (
                        <Route
                            key={trail.name}
                            trail={trail}
                        />
                    );
                })
                } 
            </>
        );
    }
}

export default Routes;