import React, { Component } from 'react';
import '../materialize/css/materialize.css';
import Login from './Login';
import SignUp from './SignUp';

class Modal extends Component {
  render() {
    return (

        <div id="modal1" className="modal">
          <div className="modal-content">
            <Login />
            <SignUp />

            <button className="btn waves-effect waves-light modal-close" type="submit" name="action">Close
            </button>
          </div>
        </div>
    );
  }
}

export default Modal;