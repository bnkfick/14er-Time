import React, { Component } from "react";
import { Row, Col, Button, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import "./Profile.scss";
import { UserConsumer } from "../../context";
import Auth from "../Auth/";
import API from "../../utils/API";


const StyledHeaderRow = styled(Row)`
    padding-top: 3em;
    padding-bottom: 2em;
    background-color: rgba(19, 18, 18, 0.671);
    backdrop-filter: blur(5px);   
    -webkit-backdrop-filter: blur(5px); 
    border-bottom: 1px solid whitesmoke; 
`
export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };

  }

  

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  saveProfile() {
    console.log("SAVE PROFILE");
  }

  render() {
    return (
      <>
      <p></p>
        <div className="container glass">
          <StyledHeaderRow className="spec-text">
            <Col md="11">
              <h4>Your User Info</h4>
            </Col>
            <Col md="1">
              {/* <i onClick={this.toggle} role="button" className="fas fa-plus-square fa-minus-square fa-2x"></i> */}
            </Col>
          </StyledHeaderRow>
          <Collapse isOpen={this.state.collapse}>

            <UserConsumer>
              {({ data, logout }) => (
                <div className="profileBox">
                  {data.loggedIn ? (
                    <>
                      <div>
                        <h1> Welcome back {data.user.firstname}</h1>
                        <Button onClick={logout}>Logout</Button>
                      </div>
                      <div
                        id="user-info"
                        className="row align-items-center justify-content-end partial-header mt-4"
                      >
                        <div className="col-11">
                          <h4 className="ls-25 mb-0">Welcome {data.user.firstname}</h4>
                        </div>
                        <div className="col-1 text-right">
                          <i
                            id="toggle-user-info-btn"
                            role="button"
                            className="fas  fa-plus-square fa-minus-square fa-2x"
                          />
                        </div>
                      </div>
                      <div id="user-info-box" className="mt-5">
                        <form>

                          <div className="row">

                            <div className="col-md-6">
                              <div className="form-group row">
                                <label htmlFor="fname-input" className="col-4 col-form-label">First Name:</label>
                                <div className="col-8">
                                  <input
                                    id="fname-input"
                                    defaultValue={data.user.firstname}
                                    type="text"
                                    className="form-control" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label
                                  htmlFor="lname-input" className="col-4 col-form-label">Last Name:</label>
                                <div className="col-8">
                                  <input
                                    id="lname-input"
                                    defaultValue={data.user.lastname}
                                    type="text"
                                    className="form-control" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="mobile-input" className="col-4 col-form-label"> Mobile Phone: </label>
                                <div className="col-8">
                                  <input
                                    id="mobile-input"
                                    type="number"
                                    className="form-control"
                                    defaultValue=""
                                    placeholder="To receive text notifications" />
                                </div>
                              </div>
                            </div>


                            <div className="col-md-6">

                              <div className="form-group row">
                                <label className="col-4 col-form-label">Upload Image</label>
                                <div className="input-group col-8">
                                  <span className="input-group-btn">
                                    <span className="btn btn-default btn-file">
                                      <input type="file" id="imgInp" />
                                    </span>
                                  </span>
                                  <input type="text" className="form-control" readOnly />
                                </div>
                                <img id='img-upload' />
                              </div>
                              <div className="form-group row">
                                <label htmlFor="bio-area" className="col-4 col-form-label">Short-Bio:</label>
                                <div className="col-8">
                                  <textarea id="bio-area"
                                    defaultValue="" type="textarea"
                                    className="form-control"></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row mt-5">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">

                            <button
                            className="btn btn-outline-light submit-btn mb-5"
                            onClick={this.savePreferences}>Save</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </>
                  ) : (
                      <><Auth action="login" /></>
                    )}
                </div>
              )}
            </UserConsumer>
          </Collapse>
         
        </div>

      </>
    );
  }
}


