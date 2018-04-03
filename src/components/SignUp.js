import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
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

  renderForm() {
    return (
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
    );
  }

  render() {
    return (
      <div className="Signup">
       {
          this.renderForm()
        }
      </div>
    );
  }
}

export default SignUp;
