import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import styled from 'styled-components';

import API from "../../utils/API";


const StyledCol = styled(Col)`
    background-image: ${ props => props.snowy ? 'url("http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/snowflake-icon.png")' : ""};
`
const StyledTemp = styled(Col)`
    background-color: ${ props => props.bgcolor };
`
const StyledWindSpeed = styled(Col)`
    background-color: ${ props => props.bgcolor };
`
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
                <Container>
                <Row>
                  <Col size="xs-12">
                    {!this.state.mountains.length ? (
                      <h1 className="text-center">No Mountains to Display</h1>
                    ) : (
                      <>
                      { this.state.mountains.map( mountain => {
                        return (
                                <Mtn
                                    key={mountain.rank}
                                    mountain={mountain}
                                  />
                                );
                            }) }
                            </>
                          )}
                  </Col>
                </Row>
                </Container>

            </>
        );
    }
}

export default Mtns;



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
      <li className="list-group-item">
        <Container>
          <Row>
          <Col size="md-1">
            { this.state.mountain.rank }
            </Col>
            <Col size="md-2">
            { this.state.mountain.peakName }
            </Col>
            <Col size="md-2">
              { this.state.mountain.elevation }
            </Col>
            <Col size="md-2">
              { this.state.weatherData.windDirection }
            </Col>
            <StyledWindSpeed size="md-1" bgcolor={this.windspeedColor()}>
              { this.state.weatherData.windSpeed }
            </StyledWindSpeed>
            <StyledTemp size="md-1" bgcolor={this.getTempColor()}>
              { this.state.weatherData.temperature + String.fromCharCode(176) + " " + this.state.weatherData.temperatureUnit }
            </StyledTemp>
            <StyledCol size="md-3" snowy={this.isSnowy()}>
              { this.state.weatherData.shortForecast }
            </StyledCol>
          </Row>
        </Container>
      </li>
    );
  }
}
