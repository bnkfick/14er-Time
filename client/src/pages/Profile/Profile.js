import React from "react";
import "./Profile.scss";
import { UserConsumer } from "../../context";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
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
                  <h4 class="ls-25 mb-0">Welcome {data.user.firstname}</h4>
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
                            <label for="fname-input" class="col-4 col-form-label">First Name:</label>
                            <div className="col-8">
                                <input id="fname-input" value="" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="lname-input" className="col-4 col-form-label">Last Name:</label>
                            <div className="col-8">
                                <input id="lname-input"  value="" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="mobile-input" class="col-4 col-form-label"> Mobile Phone: </label>
                            <div className="col-8">
                                <input id="mobile-input" type="number" className="form-control" value="" placeholder="To receive text notifications" />
                            </div>
                        </div>
                    </div>
                    
                   
                    <div class="col-md-6">
                       
                        <div className="form-group row">
                            <label className="col-4 col-form-label">Upload Image</label>
                            <div className="input-group col-8">
                                <span className="input-group-btn">
                                    <span className="btn btn-default btn-file">
                                        <input type="file" id="imgInp" />
                                    </span>
                                </span>
                                <input type="text" className="form-control" readonly />
                            </div>
                            <img id='img-upload'/>
                        </div>
                        <div className="form-group row">
                            <label for="bio-area" class="col-4 col-form-label">Short-Bio:</label>
                            <div className="col-8">
                                <textarea id="bio-area" value=""  type="textarea" className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group row mt-5">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                            
                        <button id="profile-submit-btn" data-userid="<%=userid%>" className="btn btn-outline-light submit-btn mb-5" type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
            </>
          ) : (
            <div>
              <h1> Log in to view this page </h1>
              <Link to="/login">
                <Button> Login </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </UserConsumer>
  );
}

export default Profile;