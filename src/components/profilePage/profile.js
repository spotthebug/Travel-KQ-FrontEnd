import React, { Component } from 'react';
import axios from 'axios';
import UserPostList from './userPostList';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state= { dogs: [] }
  }

  componentDidMount() {
    axios.get('https://www.reddit.com/r/dogs.json')
      .then(res => {
        const dogs = res.data.data.children.map(obj => obj.data)
        console.log("GOG", dogs)
        this.setState({ dogs: dogs });
        console.log("meow dog", this.state)
      })
  }

  render() {
    console.log("dogs?", this.state)
    return (
      <div>
        <h1>Hello, user!!!</h1>
        <UserPostList dogs={this.state}/>
      </div>
    );
  }
}

export default Profile;
