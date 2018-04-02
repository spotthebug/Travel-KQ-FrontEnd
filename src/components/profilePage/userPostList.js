import React, { Component } from 'react';
import UserPost from './userPost'

class UserPostList extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.dogs.dogs.map(dog =>
            <UserPost dogs={dog}/>
          )}
        </ul>
      </div>
    );
  }
}

export default UserPostList;
