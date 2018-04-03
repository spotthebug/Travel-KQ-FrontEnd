import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import Profile from './profilePage/profile'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };


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
    //lets authenticate


    let formData = {
      username: "test",
      password: "123"
    };
    this.props.authenticate(formData);
  }
  // I took this line out cause of the disabled...not sure what its doing
  // <Button bsStyle="primary" block bsSize="large" disabled={!this.validateForm()} type="submit">


  render() {

    if (this.props.isAuthenticated) {
           return <Profile />;
       }
       else {
         console.log("or nahh");

    return (
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
          <Button bsStyle="primary" block bsSize="large" type="submit">

            Login
          </Button>
        </form>
      </div>
    );
  };
  };
};

export default Login;
