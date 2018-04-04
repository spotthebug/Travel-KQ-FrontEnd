import React, { Component } from 'react';
import "./userPost.css"

class UserPost extends Component {
  render() {
    return(
      <div className="userPosts" key={this.props.post._id}>
        <div className="userPostImg" style={ {
          background: "url('" + this.props.post.image_url + "') no-repeat center center",
          backgroundSize: "cover"
          } }>
        </div>
        <div className="userPostBody">
          <h1 className="userPostItem">{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <button className="postButton" id={this.props.post._id}>delete</button>
          <button className="postButton" id={this.props.post._id}>edit</button>
        </div>
      </div>
    );
  }
}

export default UserPost;
