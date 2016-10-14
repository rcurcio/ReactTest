import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Login from '../plugins/user/Login'

class Mast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        };
    }

    openLogin() {
        this.setState({showLogin: true});
        console.log(this.state.showLogin);
    }

    closeLogin() {
        this.setState({showLogin: false});
    }

    render() {
        return (
            <Navbar inverse>
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
                        <NavItem eventKey={1} onClick={this.openLogin.bind(this)}> Login
                            <Login show={this.state.showLogin} onClose={this.closeLogin.bind(this)}/>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to='register'>Register</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Mast;
