import React, { Component } from "react";
import './postAddButton.css'

class PostAddButton extends Component {
  render() {
    return (
      <div className="postAddButton">
        <p>add a post</p><button>+</button>
      </div>
    );
  }
}

export default PostAddButton;
