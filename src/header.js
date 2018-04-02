import React, { Component } from "react";
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <a href="" className="navtitle">Wayfarer</a>
        <a href="" className="log">signup</a> <br />
        <a href="" className="log">login</a>
      </nav>
    );
  }
}

export default Header;
