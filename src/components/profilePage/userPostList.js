import React, { Component } from 'react';
import UserPost from './userPost'

class UserPostList extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.posts.posts.map(post =>
            <UserPost posts={post}/>
          )}
        </ul>
      </div>
    );
  }
}

export default UserPostList;
