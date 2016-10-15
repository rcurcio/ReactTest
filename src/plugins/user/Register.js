import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';

// Todo, move this into a modal when we have a store hooked up.
class Register extends Component {
    render() {
        return (
            <div className='row'>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Register </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Username <FormControl placeholder="Username" /> </p>
                        <p> Password <FormControl type="password" placeholder="Password" /> </p>
                        <p> Confirm Password <FormControl type="password" placeholder="Confirm Password" /> </p>
                        <p> Email <FormControl placeholder="Email" /> </p>
                        <Button bsStyle="primary">Submit</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        );
    }
}

Register.props = {
    show: React.PropTypes.bool,
    onClose: React.PropTypes.func
};

export default Register;
