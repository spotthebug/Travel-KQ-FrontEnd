import React, { Component } from "react";
import './cityPost.css';

class CityPost extends Component {

  render() {
    return (
      <div>
        <div className="cityPost" key={this.props.citypost.id}>
          {this.props.citypost.title}
        </div>
      </div>
    );
  }
}

export default CityPost;
