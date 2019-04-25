import React, {Component} from "react";
import { UserConsumer } from "../../context";
import "./TopNav.scss";
import {
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

export default class Navigation extends Component {
    
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <>
                <Navbar className="navbar navbar-dark" expand="md">
                    <NavbarBrand href="/"> 
                    <img className="nav-bar-logo" src="/assets/images/co-mtn-logo.png" alt="" />
                    <span className="spec-text">14'er Friend</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/profile">Profile</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                <i className="fas fa-user-secret"></i>
                                </DropdownToggle>
                                <UserConsumer>
                                {({ data, logout }) => data.loggedIn ?                 
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink id="logout-text" onClick={logout}>Logout</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>: 
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink id="login-text" href="/login">Login</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink id="signup-text" href="/signup">Signup</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                                 }
                                </UserConsumer>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}