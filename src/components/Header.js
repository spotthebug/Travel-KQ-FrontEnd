import React, { Component } from 'react';
import '../materialize/css/materialize.css';

class Header extends Component {

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="www.google.com" className="brand-logo">Logo</a>
          <ul className=" hide-on-med-and-down">
            <li className="left title"><a href="/home">Wayfarer</a></li>
            <li className=" right"><a href="/signup" data-target="modal1">Sign Up</a></li>
            <li className=" right"><a href="/login" data-target="modal1">Login</a></li>
          </ul>
        </div>
      </nav>
      );
  }
}

export default Header;
