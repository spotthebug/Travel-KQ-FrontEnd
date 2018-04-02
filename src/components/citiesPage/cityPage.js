import React, { Component } from "react";
import CityInfo from './cityInfo';
import PostAddButton from './postAddButton';
import CityPostList from './cityPostList';

class CityPage extends Component {

  render() {
    console.log("City Page", this.props.data)
    return (
      <div>
        <CityInfo data={this.props.data}/>
        <PostAddButton data={this.props.data}/>
        <CityPostList data={this.props.data}/>
      </div>
    );
  }

}

export default CityPage;
