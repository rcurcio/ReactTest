import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

class Mast extends Component {
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
                        <NavItem eventKey={1}>
                            <Link to='login'>Login</Link>
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
