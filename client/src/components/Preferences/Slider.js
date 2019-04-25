import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 15px;
  height: 15px;

  background: ${props.color};
  cursor: pointer;
  -webkit-transition: .2s;
  transition: opacity .2s;

  box-shadow: -100vw 0 0 100vw ${props.color};
  border: 2px solid #999; 
`);

const Styles = styled.div`
  display: flex;
  align-items: center;

  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Special Elite', cursive;
  padding: 1em;
  color: #fff;
 
  .value {
    flex: 2;
    font-size: 3rem;
    color:  ${props => props.color};
    padding-left: 1em;
  }
  .label-box {
    flex: 2;
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    color: white;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding-right: 1em;
  }
  .slider {

    margin: auto;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    /* border-radius: 5px; */
    color: #F7F7F7;
    /* background: ${props => props.color}; */
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
  state = {
    value: this.props.min,
    color: "#538D9F"
  }


  handleOnChange = (e) => {
    let value = e.target.value;
    console.log(value);
    let rangeStart = this.props.min;
    let range1 = value <= this.props.range1;       
    let range2 = (value > this.props.range1) && (value <= this.props.range2);
    let range3 = (value > this.props.range2) && (value <= this.props.range3);
    let range4 = (value > this.props.range3) && (value <= this.props.range4);

    // Set colors for ranges
    var blue = "#538D9F"
    var green = "rgb(152, 248, 114)"
    var yellow = "#ECBF2F"
    var red = "#ED463A"

    if (range1) {
      //resetTicks;
      this.setState({
        color: blue
      })
      //readoutBox.css("color", blue);
    } else if (range2) {
      //resetTicks;
      this.setState({
        color: green
      })
      //readoutBox.css("color", green);
    } else if (range3) {
      //resetTicks;
      this.setState({
        color: yellow
      })
      //readoutBox.css("color", yellow);
    } else if (range4) {
      this.setState({
        color: red
      })
      //readoutBox.css("color", red);
    };

    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <Styles color={this.state.color}>
        <div className="label-box">
          <label>{this.props.label}</label>
        </div>
       
        <input type="range" min={this.props.min} max={this.props.max} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value} {this.props.units}</div>
      </Styles>
    )
  }
}