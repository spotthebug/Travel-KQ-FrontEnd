import React, { Component } from "react";
import CityPost from './cityPost'

class CityPostList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(cityPost =>
            <CityPost citypost={cityPost}/>
          )}
        </ul>
      </div>
    );
  }
}

export default CityPostList;
