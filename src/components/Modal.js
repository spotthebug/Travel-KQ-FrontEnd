import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Modal, Button } from 'react-bootstrap';
import '../index.css';
import Profile from './profilePage/profile'

class ModalDisplay extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {

    if (this.props.isAuthenticated) {
           return <Profile />;
       }
       else {
         console.log("or nahh");
    return (

      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <h2> Sign Up </h2>
            <SignUp />
            <hr />
            <h2> Login </h2>
            <Login authenticate={this.props.authenticate} isAuthenticated={this.props.isAuthenticated}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );

  }
  }




//this is the closing tag, do not delete this
}



export default ModalDisplay;
