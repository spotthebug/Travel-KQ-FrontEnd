import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Modal } from "react-bootstrap";

class Login extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
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
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render () {
    return (

      <div>
      <Button bsStyle="primary" onClick={this.handleShow}>
          Login
        </Button>


      <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Body>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email1" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  autoFocus
                  type="email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password1" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button bsStyle="primary" block bsSize="large" disabled={!this.validateForm()} type="submit"
              >
                Login
              </Button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default Login;
