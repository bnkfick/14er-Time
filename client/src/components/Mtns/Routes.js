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
            <div className="routes-section">
                <Row className="thead-hide">
                    <Col className="w20">Route Name</Col>
                    <Col className="w2">Mileage</Col>
                    <Col className="w2">Gain (ft.)</Col>
                    <Col className="w2">Difficulty</Col>
                    <Col className="w2">Fall Exposure</Col>
                    <Col className="w2">Route Beta</Col>
                </Row>
                { this.state.trails.map(trail => {
                    return (
                        <Route
                            key={trail.name}
                            name={trail.name}
                        />
                    );
                })
                } 
            </div>
        );
    }
}

export default Routes;