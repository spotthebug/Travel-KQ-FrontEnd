import React, { Component } from 'react';
import '../materialize/css/materialize.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    };
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
            <label>Email</label>
            <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <label>Password</label>
            <input id="password" type="password" className="validate" value={this.state.password} onChange={this.handleChange} />
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Login
        </button>
      </form>
      </div>


      )

  }

}

export default Login;