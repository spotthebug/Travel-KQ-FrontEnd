import React, { Component } from 'react';
import '../materialize/css/materialize.css';

class SignUp extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  });
}

handleSubmit = event => {
  event.preventDefault();
}


  render() {
    return(

    <div className="row">
      <form className="col s12" onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="input-field col s12">
            <label>Name</label>
            <input id="name" type="text" className="validate"  value={this.state.name} onChange={this.handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <label>Email</label>
            <input id="email1" type="email" className="validate" value={this.state.email} onChange={this.handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <label>Password</label>
            <input id="password1" type="password" className="validate" value={this.state.password} onChange={this.handleChange} />
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Sign Up
        </button>
      </form>
    </div>
      );

  }

}

export default SignUp;