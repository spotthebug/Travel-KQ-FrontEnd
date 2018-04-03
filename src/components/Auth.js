import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import Profile from './profilePage/profile'

class Auth extends Component {
  constructor(props) {
    super(props);

    let token = localStorage.getItem('logged-in');

    this.authenticate= this.authenticate.bind(this);
    this.setToken= this.setToken.bind(this);
    this.getToken= this.getToken.bind(this);
    this._logout= this._logout.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    this.state = {
      username: "",
      password: "",
      isAuthenticated: token

    };
  }

  authenticate(user) {
    // SAMPLE ONLY -- You should insert the logic for your unique app here to request authentication!
    let url = 'http://localhost:3001/login';
    axios.post(url, user)
        .then((res) => {
            console.log(res);
            let authenticated = res.data.user ? true : false;
            console.log("authenticated == " + authenticated);
              //user is authenticated so lets update our state
              if(authenticated)
              {
                this.setToken("true");
              // localStorage.setItem('logged-in', "true");
              this.setState({ isAuthenticated: "true" });


              }

        });
    // Testing only. In prod we would let the request above update the state
    // this.setState({ isAuthenticated: true, isAuthorized:true })
}

setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

_logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }


  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   //lets authenticate
  //
  //
  //   let formData = {
  //     username: "test",
  //     password: "123"
  //   };
  //   this.props.authenticate(formData);
  // }
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

export default Auth;
