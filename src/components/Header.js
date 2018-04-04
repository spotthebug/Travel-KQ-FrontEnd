import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';
import "./Header.css"
import ModalDisplay from './Modal';
import Login from './Login';
import Signup from './SignUp';



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
          <NavItem eventKey={1}  onClick= {this.props.handleShow}>
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
