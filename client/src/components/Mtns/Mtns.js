import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import axios from "axios";

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
    axios.get(this.state.mountain.weatherLink[0]).then(response => {
      console.log(response);
      //console.log("TEMPERTURE: " + response.properties.periods[0].temperature);
      console.log("TEMPERTURE: " + response.data.properties.periods[0].temperature);
      this.setState({ weatherData: response.data.properties.periods[0]});
      // this.state.number = response.data.properties.periods[0].number;
      // this.state.startTime = response.data.properties.periods[0].startTime;
      // this.state.temperature = response.data.properties.periods[0].temperature;
      // this.state.windSpeed = response.data.properties.periods[0].windSpeed;
      // this.state.windDirection = response.data.properties.periods[0].windDirection;
      // this.state.shortForecast = response.data.properties.periods[0].shortForecast;
      // this.state.detailedForecast = response.data.properties.periods[0].detailedForecast;
      // this.state.icon = response.data.properties.periods[0].icon;

      // console.log(this.state.times);
  });
  }


  render() {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
          <Col size="md-2">
            Rank: {this.state.mountain.rank}
            </Col>
            <Col size="md-2">
            {this.state.mountain.peakName}
            </Col>
            <Col size="md-2">
              Elevation: {this.state.mountain.elevation}
            </Col>
            <Col size="md-2">
              Wind Direction: {this.state.weatherData.windDirection}
            </Col>
            <Col size="md-2">
              Wind Speed: {this.state.weatherData.windSpeed}
            </Col>
            <Col size="md-2">
              Temperature: {this.state.weatherData.temperature + String.fromCharCode(176) + " F"}
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
}
