import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Modal
} from "react-bootstrap";
import axios from 'axios';

class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      username: "",
      email: "",
      password: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let username = this.state.username
    let email = this.state.email
    let password = this.state.password

    axios.post('https://travel-kingqueens.herokuapp.com/register', { username, email, password}).then((response) => {
        alert("Sign up successful!")
    })
  }

  render () {
    return (
      <div>
      <Button bsStyle="primary" onClick={this.handleShow}>
        Sign Up
      </Button>


      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button bsStyle="primary" block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit">
                Sign Up
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>

    );
  }

}

export default SignUp;
