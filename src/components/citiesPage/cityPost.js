import React, { Component } from "react";
import './cityPost.css';

class CityPost extends Component {

  render() {
    let postClass = "cityPost " + "city" + this.props.posts.city
    let styles = {
      background: "url('" + this.props.posts.image_url + "') no-repeat center center",
      backgroundSize: "cover"
    }
    return (
      <div>
        <div className={postClass} key={this.props.posts._id}>
        <div className="postImg" style={ styles }>
        </div>
          <div className="postBody">
            <h1 className="userPostItem">{this.props.posts.title}</h1>
            <p>{this.props.posts.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CityPost;
