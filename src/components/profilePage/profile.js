import React, { Component } from 'react';
import axios from 'axios';
import "./profile.css"
import UserPostList from './userPostList';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state= { posts: [] }
  }

  componentDidMount() {
    axios.get('https://travel-kingqueens.herokuapp.com/api/posts')
      .then(res => {
        console.log(res.data)
        const posts = res.data.map(obj => obj)
        this.setState({ posts: posts });
        console.log("posts:", this.state)
      })
  }

  render() {
    console.log("posts?", this.state)
    return (
      <div className="profilePage">
        <h1 className="profilePageTitle">Hello, user!!!</h1>
        <UserPostList posts={this.state}/>
      </div>
    );
  }
}

export default Profile;
