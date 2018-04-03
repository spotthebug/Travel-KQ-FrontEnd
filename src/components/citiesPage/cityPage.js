import React, { Component } from "react";
import CityInfo from './cityInfo';
<<<<<<< HEAD
import NewPostModal from './newPostModal';
=======
>>>>>>> de929eb774f8f600e2f673087f31bea9bad24af6
import CityPostList from './cityPostList';

class CityPage extends Component {

  render() {
    console.log("City Page", this.props)
    return (
      <div>
<<<<<<< HEAD
        <CityInfo data={this.props.data}/>
        <NewPostModal data={this.props.data}/>
        <CityPostList data={this.props.data}/>
=======
        <CityInfo cities={this.props.cities} posts={this.props.posts}/>
        <CityPostList cities={this.props.cities} posts={this.props.posts}/>
>>>>>>> de929eb774f8f600e2f673087f31bea9bad24af6
      </div>
    );
  }

}

export default CityPage;
