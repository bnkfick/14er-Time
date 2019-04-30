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
  outline: 1px solid #333; 
`);

const Styles = styled.div`
  display: flex;
  align-items: center;

  margin-top: .5rem;
  margin-bottom:1rem;
  font-family: 'Special Elite', cursive;
  padding: 1em;
  color: #fff;
  border-bottom: 1px solid whitesmoke;
 
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

    outline: 1px solid #333; 
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
    color: "#4286f4"
  }


  handleOnChange = (e) => {
    let value = e.target.value;
    // console.log(value);
    let rangeStart = this.props.min;
    let range1 = value <= this.props.range1;       
    let range2 = (value > this.props.range1) && (value <= this.props.range2);
    let range3 = (value > this.props.range2) && (value <= this.props.range3);
    let range4 = (value > this.props.range3) && (value <= this.props.range4);

    // Set colors for ranges
    var blue = "#4286f4"
    var green = "rgb(152, 248, 114)"
    var yellow = "#ECBF2F"
    var red = "#ED463A"

    if  ( value <= this.props.range1 ) {
      this.setState({
        color: blue
      })
    } else if (range2) {
      this.setState({
        color: green
      })
    } else if (range3) {
      this.setState({
        color: yellow
      })
    } else if (range4) {
      this.setState({
        color: red
      })
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
        <div className="value">{this.state.value}{
            this.state.value < this.props.max  
              ? ""
              : "+"}
           {this.props.units}  </div>
      </Styles>
    )
  }
}