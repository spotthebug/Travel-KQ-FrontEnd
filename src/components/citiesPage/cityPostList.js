import React, { Component } from "react";
import CityPost from './cityPost'

class CityPostList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.data.map(cityPost =>
            <CityPost citypost={cityPost}/>
          )}
        </div>
      </div>
    );
  }
}

export default CityPostList;
