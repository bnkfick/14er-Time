import React, { Component } from "react";
import Slider from "./Slider";
import styled from 'styled-components';
import {
    Row,
    Col,
    Button,
    Collapse,
} from 'reactstrap';

const StyledHeaderRow = styled(Row)`
    padding-top: 3em;
    padding-bottom: 2em;
    background-color: rgba(19, 18, 18, 0.671);
    backdrop-filter: blur(5px);   
    -webkit-backdrop-filter: blur(5px); 
    border-bottom: 1px solid whitesmoke; 
`


export default class Preferences extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };

    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <>
                <div className="container glass">
                    <StyledHeaderRow className="spec-text">
                        <Col md="11">
                            <h4>Climbing Condition Preferences</h4>
                        </Col>
                        <Col md="1">
                            <i onClick={this.toggle} role="button" className="fas fa-plus-square fa-minus-square fa-2x"></i>
                        </Col>
                    </StyledHeaderRow>
                    <Collapse isOpen={this.state.collapse}>


                        {/* <div className="slider slider-horizontal" id="">
                                            <div className="slider-track">
                                                <div className="slider-track-low" style={{left: 0 + 'px', width: 0 + '%'}}></div>
                                                <div className="slider-selection tick-slider-selection" style={{left: 0 + '%', width: 0 + '%'}}></div>
                                                <div className="slider-track-high" style={{right: 0 + 'px', width: 100 + '%'}}></div></div>
                                            <div className="tooltip tooltip-main top" role="presentation" style={{left: 0}}>
                                                <div className="tooltip-arrow"></div>
                                                <div className="tooltip-inner">-20</div>
                                            </div>
                                            <div className="tooltip tooltip-min top" role="presentation">
                                                <div className="tooltip-arrow"></div>
                                                <div className="tooltip-inner"></div>
                                            </div>
                                            <div className="tooltip tooltip-max bottom" role="presentation" style={{top: 18 + 'px'}}>
                                                <div className="tooltip-arrow"></div>
                                                <div className="tooltip-inner"></div>
                                            </div>
                                            <div className="slider-handle min-slider-handle" role="slider" aria-valuemin="0" aria-valuemax="10" aria-valuenow="-20" tabIndex="0" style={{left: 0 + '%'}}></div>
                                            <div className="slider-handle max-slider-handle hide" role="slider" aria-valuemin="0" aria-valuemax="10" aria-valuenow="-20" tabIndex="0" style={{left: 0 + '%'}}></div>
                                            <div className="slider-tick-container">
                                                <div className="slider-tick in-selection" style={{left: 0 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 12.5 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 25 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 37.5 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 50 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 62.5 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 75 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 87.5 + '%'}}></div>
                                                <div className="slider-tick" style={{left: 100 + '%'}}></div>
                                            </div>
                                        </div> */}

                        <Slider
                            min="-20"
                            max="60"
                            range1="0"
                            range2="20"
                            range3="40"
                            range4="60"
                            label="Minimum Temperature"
                            units="&#176;F" />
                        <Slider min="0" max="60" label="Max Wind Speeds" units="mph" />
                        <Slider min="0" max="400" label="Max Distance" units="mi" />
                        <Slider min="-20" max="60" label="Max Chance of Precipitation" units="%" />

                    </Collapse>
                </div>

            </>
        );
    }
}