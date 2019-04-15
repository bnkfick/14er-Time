import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { UserConsumer } from "../../context";
import "./style.css";
import Mtn from "./Mtn";
import API from "../../utils/API";

class Mtns extends Component {
  state = {
    mountains: [],
    attempts: 0
  };


  componentDidMount() {
    console.log("GETTING MOUNTAINS IN componentDidMount");

    API.getMtns()
      .then(res => {
        this.setState({ mountains: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // if ( this.state.mountains.length < 1 ) {
    //   return <div className="center"><i className="fas fa-spinner fa-spin 7x" aria-hidden="true"></i></div>
    // }

    return (
      <UserConsumer>
        {({ data, logout }) => (
          <>
          {console.log(data)}
            <Container className="glass">

              <Row className="mtn-header">
                <Col md="1" className="mtn-col">{data.loggedIn ? "Favorite" : ""}</Col>
                <Col md="1" className="mtn-col">Rank</Col>
                <Col md="2" className="mtn-col">Mountain</Col>
                <Col md="1" className="mtn-col">Elevation</Col>
                <Col md="1" className="mtn-col">Wind Direction</Col>
                <Col md="1" className="mtn-col">Wind Speed</Col>
                <Col md="1" className="mtn-col">Current Temp</Col>
                <Col md="3" className="mtn-col">Short Forecast</Col>
                {/* <th className="w6  mtn-col ">Distance from You</Col> */}
                <Col md="1" className="mtn-col  "><i className="fas fa-plus-square fa-minus-square fa-2x ghost"></i></Col>
              </Row>


              <Row className="thead-hide">
                <Col md="1" className="mtn-col">Favorite</Col>
                <Col md="1" className="mtn-col ">Rank</Col>
                <Col md="2" className="mtn-col ">Mountain</Col>
                <Col md="1" className="mtn-col  ">Elevation</Col>
                <Col md="1" className="mtn-col  ">Wind Direction</Col>
                <Col md="1" className="mtn-col  ">Wind Speed</Col>
                <Col md="1" className="mtn-col  ">Current Temp</Col>
                <Col md="3" className="mtn-col  ">Short Forecast</Col>
                {/* <th className="w6  mtn-col ">Distance from You</Col> */}
                <Col md="1" className="mtn-col  "><i className="fas fa-plus-square fa-minus-square fa-2x ghost"></i></Col>
              </Row>

              {this.state.mountains.map(mountain => {
                return (
                  <Mtn
                    key={mountain.rank}
                    mountain={mountain}
                    isLoggedIn={data.loggedIn}
                  />
                );
              })
              }

            </Container>

          </>

          )}
    </UserConsumer>
  );
    }
  }
  
  export default Mtns;
  
