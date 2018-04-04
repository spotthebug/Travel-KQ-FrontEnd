import React, { Component } from "react";
import CityInfo from './cityInfo';
import NewPostModal from './newPostModal';
import CityPostList from './cityPostList';

class CityPage extends Component {

  render() {
    console.log("City Page", this.props)
    return (
      <div>
        <CityInfo cities={this.props.cities} posts={this.props.posts}/>
        <CityPostList cities={this.props.cities} posts={this.props.posts}/>
      </div>
    );
  }

}

export default CityPage;
