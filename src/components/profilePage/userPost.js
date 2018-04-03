import React, { Component } from 'react';

class UserPost extends Component {
  render() {
    return(
      <div key={this.props.posts._id}>
        <img src={this.props.posts.image_url} />
        <h1 className="userPostItem">{this.props.posts.title}</h1>
        <p>{this.props.posts.body}</p>
      </div>
    );
  }
}

export default UserPost;
