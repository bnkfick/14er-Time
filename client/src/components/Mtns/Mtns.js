import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import styled from 'styled-components';
import "./style.css";
import Mtn from "./Mtn";
import API from "../../utils/API";

class Mtns extends Component {
    state = {
      mountains: [],
    };

    
    componentDidMount() {
      console.log("GETTING MOUNTAINS IN componentDidMount");
      API.getMtns()
        .then(res => {
          this.setState({ mountains: res.data })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <Container className="glass">

                            <Row className="mtn-row">
                                {/* <Col className="w2  mtn-col  h9 align-middle">Favorite</Col> */}
                                <Col className="w2  mtn-col align-middle">Rank</Col>
                                <Col className="w10  mtn-col align-middle">Mountain</Col>
                                <Col className="w8  mtn-col  align-middle">Elevation</Col>
                                <Col className="w8  mtn-col  align-middle">Wind Direction</Col>
                                <Col className="w8  mtn-col  align-middle">Wind Speed</Col>
                                <Col className="w8  mtn-col  align-middle">Current Temp</Col>
                                <Col className="w10  mtn-col  align-middle">Short Forecast</Col>
                                {/* <th className="w6  mtn-col align-middle">Distance from You</Col> */}
                                <Col className="w2  mtn-col  align-middle"><i className="fas fa-plus-square fa-minus-square fa-2x ghost"></i></Col>
                            </Row>


                    {!this.state.mountains.length ? (
                      <h1 className="text-center">No Mountains to Display</h1>
                    ) : (
                      <>
                            <Row className="thead-hide">
                                {/* <Col className="w2  h9 align-middle">Favorite</Col> */}
                                <Col className="w2  mtn-col  align-middle">Rank</Col>
                                <Col className="w10  mtn-col  align-middle">Mountain</Col>
                                <Col className="w8  mtn-col  align-middle">Elevation</Col>
                                <Col className="w8  mtn-col  align-middle">Wind Direction</Col>
                                <Col className="w8  mtn-col  align-middle">Wind Speed</Col>
                                <Col className="w8  mtn-col  align-middle">Current Temp</Col>
                                <Col className="w10  mtn-col  align-middle">Short Forecast</Col>
                                {/* <Col className="w6 mtn-col  align-middle">Distance from You</Col> */}
                                <Col className="w2  mtn-col  align-middle"><i className="fas fa-plus-square fa-minus-square fa-2x ghost"></i></Col>
                            </Row>

                            { this.state.mountains.map( mountain => {
                                return (
                                        <Mtn
                                            key={mountain.rank}
                                            mountain={mountain}
                                        />
                                        );
                                }) 
                            }
                            </>
                          )}

                </Container>

            </>
        );
    }
}

export default Mtns;

