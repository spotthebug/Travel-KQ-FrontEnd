import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import ModalDisplay from './Modal';
import Login from './Login';
import Signup from './SignUp';


class Header extends Component {

  render() {
    return(
      <nav>
        <Link to="/home" className="logo">WAYFARER</Link>
        <Link to="/cities">cities</Link>
        <Link to="/profile">profile</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
      </nav>


      );
  }
}

export default Header;
