import React, { Component } from "react";
import CityInfo from './cityInfo';
import PostAddButton from './postAddButton';
import PostList from './postList';

class CityPage extends Component {
  render() {
    return (
      <div>
        <CityInfo />
        <PostAddButton />
        <PostList />
      </div>
    );
  }
}

export default CityPage;
