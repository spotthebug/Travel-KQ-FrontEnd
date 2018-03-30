import React, { Component } from "react";

class CityPost extends Component {

  render() {
    return (
      <div>
        <li className="cityListItem" key={this.props.citypost.id}>
          {this.props.citypost.title}
        </li>
      </div>
    );
  }
}

export default CityPost;
