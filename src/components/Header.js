import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class Header extends Component {
  render() {
    return(

      <Navbar className="navbar" brand='logo' right>
        <NavItem className="title" href='#'>Wayfarer</NavItem>
        <NavItem className="navitem " href='#'>Sign Up</NavItem>
        <NavItem href='#'>Login</NavItem>
        <NavItem  className="navitem " href='#'>Profile</NavItem>
      </Navbar>
      );
  }
}

export default Header;