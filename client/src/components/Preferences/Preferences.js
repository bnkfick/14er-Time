import React, { Component } from "react";

import API from "../../utils/API";
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
    state = { 
        collapse: true,
        minTemp: this.props.user.preferences[0].tempMin,
        maxWind: this.props.user.preferences[0].windLimit,
        maxPrecip: this.props.user.preferences[0].precipLimit,
        maxDist: this.props.user.preferences[0].distMax,
    };

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.savePreferences = this.savePreferences.bind(this);
    }

    componentDidMount() {
        console.log(`Preferences`);
        console.log(this.props);
        console.log(this.props.user);
        console.log(this.props.user.preferences);
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    savePreferences() {
        console.log(this.state);
        console.log("SAVE PREFERENCES");
        var newUserPreferences = {
            username: this.props.user.username,
            windLimit: this.state.maxWind,
            precipLimit: this.state.maxPrecip,
            tempMin: this.state.minTemp,
            distMax: this.state.maxDist
        };
        console.log(newUserPreferences);
        API.saveUserPreferences(newUserPreferences, this.props.userId)
        .then(response => {
                console.log(response);
                console.log("changed user preferences", newUserPreferences);
            })
            .catch(err => console.log(err));
    }

    updateTemp   = value => { this.setState({minTemp: value}) };
    updateWind   = value => { this.setState({maxWind: value}) };
    updatePrecip = value => this.setState({ maxPrecip: value});
    updateDist   = value => this.setState({maxDist: value});

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
                            min={-20}
                            max={60}
                            range1={0}
                            range2={20}
                            range3={40}
                            range4={60}
                            label="Minimum Temperature"
                            value={this.state.minTemp}
                            handleSlide={this.updateTemp}
                            units="&#176;F" />
                        <Slider
                            min={0}
                            max={80}
                            range1={20}
                            range2={40}
                            range3={60}
                            range4={80}
                            label="Max Wind Speeds"
                            value={10}
                            handleSlide={this.updateWind}
                            units="mph" />
                        <Slider
                            min={0}
                            max={400}
                            range1={100}
                            range2={200}
                            range3={300}
                            range4={400}
                            label="Max Distance"
                            value={this.state.maxDist}
                            handleSlide={this.updateDist}
                            units="mi" />
                        <Slider
                            min={0}
                            max={80}
                            range1={20}
                            range2={40}
                            range3={60}
                            range4={80}
                            label="Max Chance of Precipitation"
                            handleSlide={this.updatePrecip}
                            value={this.state.maxPrecip}
                            units="%" />

                    </Collapse>
                    <button
                        className="btn btn-outline-light submit-btn mb-5"
                        onClick={this.savePreferences}>Save</button>
                </div>

            </>
        );
    }
}