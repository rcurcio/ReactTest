import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';


class Register extends Component {
    render() {
        return (
            <div className='row'>
                <p> Username <FormControl /> </p>
            </div>
        );
    }
}

export default Register;
