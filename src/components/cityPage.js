import React, { Component } from "react";
import CityInfo from './cityInfo';
import PostAddButton from './postAddButton';
import PostList from './postList';

class CityPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("City Page", this.props.data)
    return (
      <div>
        <CityInfo data={this.props.data}/>
        <PostAddButton data={this.props.data}/>
        <PostList data={this.props.data}/>
      </div>
    );
  }
}

export default CityPage;
