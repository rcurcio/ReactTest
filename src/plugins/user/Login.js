import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';


class Login extends Component {
    render() {
        return (
            <div className='row'>
                <p> Username <FormControl placeholder="Username" /> </p>
                <p> Password <FormControl type="password" placeholder="Password" /> </p>
                <Button bsStyle="primary">Login</Button>
            </div>
        );
    }
}

export default Login;
