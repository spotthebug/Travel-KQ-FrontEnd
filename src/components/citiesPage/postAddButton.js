import React, { Component } from "react";
import './postAddButton.css'

class PostAddButton extends Component {
  render() {
    return (
      <div className="postAddButton">
        <p>add a post</p><button onClick={this.props.handleShow}>+</button>
      </div>
    );
  }
}

export default PostAddButton;
