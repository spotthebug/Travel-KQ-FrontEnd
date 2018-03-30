import React, { Component } from 'react';

class UserPost extends Component {
  render() {
    return(
      <div>
        <li className="userPostItem" key={this.props.dogs.id}>{this.props.dogs.title}</li>
      </div>
    );
  }
}

export default UserPost;
