import React, { Component } from "react";
import "./preferences.css"
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Preferences extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <>
                    <div id="preferences" className="container glass spec-text">
                    <div id="toggle-preference-box" className="row align-items-center justify-content-end partial-header">
                        <div className="col-11">
                            <h4 className="ls-25 mb-0">Climbing Condition Preferences</h4>
                        </div>
                        <div className="col-1 text-right">
                            <i onClick={this.toggle}  id="preference-btn" role="button" className="fas  fa-plus-square fa-minus-square fa-2x"></i>
                        </div>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                        <div id="preference-box" className="mt-5">
                            <form>
                                <div className="form-group question-template question">
                                    <div className="row">
                                        <div className="col-2 label-box">
                                            <label>Minimum Temperature</label>
                                        </div>
                                        <div id="min-temp-box" className="col-8 text-center input-box">
                                            <input id="min-temp-slider" className="custom-slider" type="text" />
                                        </div>
                                        <div className="col-2 text-center readout-box">
                                            <span className="readout">-20</span> &#176;F
                        </div>
                                    </div>
                                </div>
                                <div className="form-group question-template question">
                                    <div className="row">
                                        <div className="col-2 label-box">
                                            <label>Max Wind Speeds</label>
                                        </div>
                                        <div id="max-wind-box" className="col-8 text-center input-box">
                                            <input id="max-wind-slider" className="custom-slider" type="text" />
                                        </div>
                                        <div className="col-2 text-center readout-box">
                                            <span className="readout">0</span> mph
                        </div>
                                    </div>
                                </div>
                                <div className="form-group question-template question">
                                    <div className="row">
                                        <div className="col-2 label-box">
                                            <label>Max Chance of Precipitation</label>
                                        </div>
                                        <div id="max-precip-box" className="col-8 text-center input-box">
                                            <input id="max-precip-slider" className="custom-slider" type="text" />
                                        </div>
                                        <div className="col-2 text-center readout-box">
                                            <span className="readout">0</span> %
                        </div>
                                    </div>
                                </div>
                                <div className="form-group question-template question">
                                    <div className="row">
                                        <div className="col-2 label-box">
                                            <label>Max Distance</label>
                                        </div>
                                        <div id="max-dist-box" className="col-8 text-center input-box">
                                            <input id="max-dist-slider" className="custom-slider" type="text" />
                                        </div>
                                        <div className="col-2 text-center readout-box">
                                            <span className="readout">0</span> mi
                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Collapse>
                </div>

            </>
        );
    }
}