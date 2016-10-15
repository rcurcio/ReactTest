import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Login from '../user/Login'
import Register from '../user/Register'

class Mast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            showRegister: false,
        };
    }

    toggleLogin = () => {
        this.setState({showLogin: !this.state.showLogin});
    }

    toggleRegister = () => {
        this.setState({showRegister: !this.state.showRegister});
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'> PlaceHolder Title </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title='Game' id='nav-dropdown'>
                            <MenuItem eventKey={1.1}> Black Ops 3 </MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={this.toggleLogin}> Login
                            <Login show={this.state.showLogin} onClose={this.toggleLogin}/>
                        </NavItem>
                        <NavItem eventKey={2} onClick={this.toggleRegister}> Register
                            <Register show={this.state.showRegister} onClose={this.toggleRegister}/>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Mast;
