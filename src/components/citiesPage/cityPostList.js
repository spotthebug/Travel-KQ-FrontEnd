import React, { Component } from "react";
import CityPost from './cityPost'

class CityPostList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.posts.map(post =>
            <CityPost posts={post}/>
          )}
        </div>
      </div>
    );
  }
}

export default CityPostList;
