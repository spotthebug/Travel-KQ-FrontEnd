import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {

  render() {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Wayfarer</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/login" >
            Login
          </NavItem>
          <NavItem eventKey={2} href="/signup" >
            SignUp
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
  }
}

export default Header;
