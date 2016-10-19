import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRegisteredUser: true
        }
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Login </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Username <FormControl placeholder="Username" /> </p>
                        <p> Password <FormControl type="password" placeholder="Password" /> </p>
                        <Button bsStyle="primary">Login</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

Login.props = {
    show: React.PropTypes.bool,
    onClose: React.PropTypes.func
};

export default Login;
