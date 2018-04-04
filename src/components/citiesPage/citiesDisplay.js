import React, { Component } from "react";
import './citiesDisplay.css';
import axios from 'axios';
import CitiesList from './CitiesList';
import CityPage from './cityPage';

class CitiesDisplay extends Component {

  constructor(props) {
    super(props);
    this.state= { cities: [], posts: [] }

    this.show = this.show.bind(this);

  }

  componentDidMount() {
    axios.get('https://travel-kingqueens.herokuapp.com/api/cities')
      .then(res => {
        console.log("this is cities", res.data)
        const cities = res.data.map(obj => obj)
        this.setState({ cities: cities });
      })

      axios.get('https://travel-kingqueens.herokuapp.com/api/posts')
        .then(res => {
          console.log("this is posts", res.data)
          const posts = res.data.map(obj => obj)
          this.setState({ posts });
        })
  }

  render() {
    if (this.state.cities.length !== 0) {
      return (
        <div className="citiesdisplay">
          <div className="sidebar">
            <CitiesList cities={this.state.cities} posts={this.state.posts} show={this.show}/>
          </div>
          <div className="cityPage">
            <CityPage cities={this.state.cities} posts={this.state.posts}/>
          </div>
        </div>
      );
    } else {
      return null
    }
  }

  show(id) {
    let showitem = document.getElementById("cityinfo" + id)
    let hide = document.querySelectorAll('.cityInfo')
    hide.forEach(item => {
      item.style.display = "none"
    });
    showitem.style.display = "flex"

    let classId = ".city" + id
    let showPosts = document.querySelectorAll(classId)
    let hidePosts = document.querySelectorAll('.cityPost')
    hidePosts.forEach(item => {
      item.style.display = "none"
    })
    showPosts.forEach(item => {
      item.style.display = "flex"
    })
  }
}

export default CitiesDisplay;
