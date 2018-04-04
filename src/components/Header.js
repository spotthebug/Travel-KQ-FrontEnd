import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import ModalDisplay from './Modal';
import Login from './Login';
import Login from './SignUp';


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
          <NavItem eventKey={1} href="/login" onClick= {this.props.show}>
            Login
          </NavItem>
          <NavItem eventKey={2} href="/signup" >
            SignUp
          </NavItem>
          <NavItem eventKey={3} href="/profile" >
            Profile
          </NavItem>
          <NavItem eventKey={4} href="/cities" >
            Cities
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>


      );
  }
}

export default Header;

