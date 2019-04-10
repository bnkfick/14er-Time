import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";

class Mtns extends Component {
    state = {
      mountains: []
    };

    

    componentDidMount() {
      console.log("GETTING MOUNTAINS IN componentDidMount");
      API.getMtns()
        .then(res => {

          this.setState({ mountains: res.data })
          console.log(typeof this.state.mountains);
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
                      <Mountain
                        key={mountain.rank}
                        peakName={mountain.peakName}
                        elevation={mountain.elevation}
                        rank={mountain.rank}
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

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function Mountain({
    rank,
    peakName,
    elevation,
    id
  }) {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
          <Col size="md-2">
            Rank: {rank}
            </Col>
            <Col size="md-2">
            {peakName}
            </Col>
            <Col size="md-2">
              Elevation: {elevation}
            </Col>
          </Row>
        </Container>
      </li>
    );
  }