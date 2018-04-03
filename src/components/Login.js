import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.trial = this.trial.bind(this);
    this.authenticate = this.authenticate.bind(this);

    this.state = {
      email: "",
      password: ""
    };


  }

  trial(young){
    console.log("we in the test of tests " + young);
  }

  authenticate(user) {
    // SAMPLE ONLY -- You should insert the logic for your unique app here to request authentication!
    let url = 'http://localhost:3001/login';
    axios.post(url, user)
        .then((res) => {
            console.log(res);
            let authenticated = res.data.user ? true : false;
            console.log("authenticated == " + authenticated);
            this.setState({ isAuthenticated: authenticated });
            localStorage.setItem('logged-in', "true");

        });
    // Testing only. In prod we would let the request above update the state
    // this.setState({ isAuthenticated: true, isAuthorized:true })
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
    this.authenticate(formData);
  }
  // I took this line out cause of the disabled...not sure what its doing
  // <Button bsStyle="primary" block bsSize="large" disabled={!this.validateForm()} type="submit">


  render() {
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
  }
}

export default Login;
