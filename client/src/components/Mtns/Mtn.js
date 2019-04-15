import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import axios from "axios";
import styled from 'styled-components';

import Routes from "./Routes";
import API from "../../utils/API";

import "./style.css";
import "./routes.css";

const StyledCol = styled(Col)`
    background-image: ${ props => props.snowy ? 'url("http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/snowflake-icon.png")' : ""};
    background-size: 3em;
    background-repeat: no-repeat;
    background-position: center;
`
const StyledTemp = styled(Col)`
    background-color: ${ props => props.bgcolor};
`
const StyledWindSpeed = styled(Col)`
    background-color: ${ props => props.bgcolor};
`

class Mtn extends Component {
    state = {
        mountain: this.props.mountain,
        weatherData: {
            windDirection: "",
            temperature: "",
            temperatureUnit: ""
        },
        routesOpen: false,
        cssClasses: ["Routes"],
        cssPlusMinus: ["fas", "fa-plus-square", "fa-minus-square", "fa-2x"]
    }

    //move to the server side if protected api key is used
    componentDidMount() {
        API.getWeather(this.state.mountain.weatherLink[0])
            .then(response => {
                //console.log(response.data.properties.periods[0]);
                this.setState({ weatherData: response.data.properties.periods[0] });
            })
            .catch(err => console.log(err));
    }

    toggleRoutes = () => {
        if (this.state.routesOpen) {
            this.setState({
                routesOpen: false,
                cssClasses: ["Routes", "RoutesClosed"],
                cssPlusMinus: ["fas", "fa-plus-square", "fa-minus-square", "fa-2x"]
            });
        } else {
            this.setState({
                routesOpen: true,
                cssClasses: ["Routes", "RoutesOpen"],
                cssPlusMinus: ["fas", "fa-minus-square", "fa-2x"]
            });
        }
        console.log("this.state.routesOpen " + this.state.routesOpen);
        console.log(this.state.cssClasses);
    }

    windspeedColor() {
        //Conditional Formatting for Windspeed
        var windSpeedString = this.state.weatherData.windSpeed;
        if (windSpeedString != null) {
            var windSpeedRange = windSpeedString.match(/\d+/g).map(Number);

            if (windSpeedRange[1] > 75) {
                return "rgba(191, 78, 63, 0.4)";
            } else if ((windSpeedRange[0] > 30) && (windSpeedRange[1] <= 75)) {
                return "rgba(229, 238, 73, 0.4)";
            } else {
                return "rgba(63, 191, 63, 0.4)";
            }
        }
    }

    getTempColor() {
        if (this.state.weatherData.temperature <= 32) {
            return "rgb(30, 201, 255, 0.4)";
        } else if ((this.state.weatherData.temperature > 32) && (this.state.weatherData.temperature < 60)) {
            return "rgba(63, 191, 63, 0.4)";
        } else {
            return "rgba(191, 78, 63, 0.4)";
        }
    }

    isSnowy() {
        //Conditional Formatting for Short Forecast
        let shortForecast = this.state.weatherData.shortForecast;

        if ((shortForecast === "Chance Snow Showers") ||
            (shortForecast === "Snow Showers Likely") ||
            (shortForecast === "Snow Showers") ||
            (shortForecast === "Slight Chance Snow Showers") ||
            (shortForecast === "Partly Cloudy then Slight Chance Snow Showers") ||
            (shortForecast === "Mostly Cloudy then Chance Snow Showers") ||
            (shortForecast === "Snow Showers Likely And Patchy Blowing Snow") ||
            (shortForecast === "Isolated Snow Showers then Mostly Sunny")) {
            return 1;
        } else {
            return 0;
        }
    }

    render() {
        return (
            <>
                <Row className="mtn-row">
                    <Col md="1" className="mtn-col ">
                        {this.props.isLoggedIn ? <i value="false" class="favorite far fa-heart fa-2x"></i> : ''}
                    </Col>
                    <Col md="1" className="mtn-col ">
                        {this.state.mountain.rank}
                    </Col>
                    <Col md="2" className="mtn-col name">
                        {this.state.mountain.peakName}
                    </Col>
                    <Col md="1" className="mtn-col ">
                        {this.state.mountain.elevation}
                    </Col>
                    <Col md="1" className="mtn-col ">
                        {this.state.weatherData.windDirection}
                    </Col>
                    <StyledWindSpeed md="1" className="mtn-col " bgcolor={this.windspeedColor()}>
                        {this.state.weatherData.windSpeed}
                    </StyledWindSpeed>
                    <StyledTemp md="1" className="mtn-col " bgcolor={this.getTempColor()}>
                        {this.state.weatherData.temperature + String.fromCharCode(176) + " " + this.state.weatherData.temperatureUnit}
                    </StyledTemp>
                    <StyledCol md="3" className="mtn-col " snowy={this.isSnowy()}>
                        {this.state.weatherData.shortForecast}
                    </StyledCol>
                    <Col md="1" className="mtn-col">
                        <i onClick={this.toggleRoutes} role="button" id="<%=mtn.id%>"
                            className={this.state.cssPlusMinus.join(' ')}></i></Col>
                </Row>

                        <div className={this.state.cssClasses.join(' ')}>
                            <Routes
                                key={this.state.mountain.name}
                                towns={this.state.mountain.towns}
                                trails={this.state.mountain.trails}
                            />
                        </div>

            </>
        );
    }
}

export default Mtn;
