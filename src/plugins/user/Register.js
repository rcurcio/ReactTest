import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';

// Todo, move this into a modal when we have a store hooked up.
class Register extends Component {
    render() {
        return (
            <div className='row'>
                <p> Username <FormControl placeholder="Username" /> </p>
                <p> Password <FormControl type="password" placeholder="Password" /> </p>
                <p> Confirm Password <FormControl type="password" placeholder="Confirm Password" /> </p>
                <p> Email <FormControl placeholder="Email" /> </p>
                <Button bsStyle="primary">Submit</Button>
            </div>
        );
    }
}

export default Register;
