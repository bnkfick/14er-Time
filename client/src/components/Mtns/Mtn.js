import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import styled from 'styled-components';
import "./style.css";
import API from "../../utils/API";


class Mtn extends Component {
    state = {
      mountain: this.props.mountain,
      weatherData:{}
    };
  
    componentDidMount() {
      console.log("GETTING WEATHER IN componentDidMount");
      axios.get(this.state.mountain.weatherLink[0])
      .then(response => {
        console.log(response.data.properties.periods[0]);
        this.setState({ weatherData: response.data.properties.periods[0]});
      })        
      .catch(err => console.log(err));
    }
  
    toggleRoutes = event => {
        console.log("toggleRoutes");
        event.preventDefault();
        
    }
    windspeedColor() {
        //Conditional Formatting for Windspeed
        var windSpeedString = this.state.weatherData.windSpeed;
        if (windSpeedString != null) {
        var windSpeedRange = windSpeedString.match(/\d+/g).map(Number);
  
        if (windSpeedRange[1] > 75) {
            return "rgba(191, 78, 63, 0.4)";
        } else if ( (windSpeedRange[0] > 30) && (windSpeedRange[1] <= 75 ) ) {
           return "rgba(229, 238, 73, 0.4)";
        } else {
            return "rgba(63, 191, 63, 0.4)";
        }
      }
    }
    getTempColor() {
  
        if (this.state.weatherData.temperature < 32) {
             return "rgb(30, 201, 255, 0.4)";
        } else if ((this.state.weatherData.temperature > 32) && (this.state.weatherData.temperature < 60) ) {
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
      (shortForecast  === "Slight Chance Snow Showers") ||
      (shortForecast === "Partly Cloudy then Slight Chance Snow Showers") ||
      (shortForecast === "Mostly Cloudy then Chance Snow Showers") ||
      (shortForecast === "Snow Showers Likely And Patchy Blowing Snow") ||
      (shortForecast  === "Isolated Snow Showers then Mostly Sunny")) 
      {
        return 1;
      } else {
        return 0;
      }
    }
  
    render() {
      return (
  
          <>
            <Row className="mtn-row">
              <Col className="w2 mtn-col ">
              { this.state.mountain.rank }
              </Col>
              <Col className="w10 mtn-col name">
              { this.state.mountain.peakName }
              </Col>
              <Col className="w8 mtn-col ">
                { this.state.mountain.elevation }
              </Col>
              <Col className="w8  mtn-col ">
                { this.state.weatherData.windDirection }
              </Col>
              <StyledWindSpeed className="w8 mtn-col " bgcolor={this.windspeedColor()}>
                { this.state.weatherData.windSpeed }
              </StyledWindSpeed>
              <StyledTemp className="w8 mtn-col " bgcolor={this.getTempColor()}>
                { this.state.weatherData.temperature + String.fromCharCode(176) + " " + this.state.weatherData.temperatureUnit }
              </StyledTemp>
              <StyledCol className="w10 mtn-col " snowy={this.isSnowy()}>
                { this.state.weatherData.shortForecast }
              </StyledCol>
              <Col className="w2 mtn-col align-middle toggle-show-routes-btn"><i onClick={this.toggleRoutes} role="button" id="<%=mtn.id%>" className="fas fa-plus-square fa-minus-square fa-2x"></i></Col>
            </Row>
            <Row className="routes">
                <Col>
                      <Routes />
                </Col>
            </Row>
          </>
      );
    }
  }
  