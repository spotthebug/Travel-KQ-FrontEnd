import React, { Component } from 'react';
import Header from './Header';
import '../index.css';
import ArticlesList from './ArticlesList';
import ImageCarousel from './Carousel';
import ModalDisplay from './Modal';
import Login from './Login';
import axios from 'axios'
// var Login = require("./Login");


class Home extends Component {

  constructor(props) {
    super(props);

    this.authenticate= this.authenticate.bind(this);
    // this.handleClose = this.handleClose.bind(this);

    this.state = {
      isAuthenticated: false

    };
  }

  authenticate(user) {
    // SAMPLE ONLY -- You should insert the logic for your unique app here to request authentication!
    let url = 'http://localhost:3001/login';
    axios.post(url, user)
        .then((res) => {
            console.log(res);
            let authenticated = res.data.user ? true : false;
            console.log("authenticated == " + authenticated);
              //user is authenticated so lets update our state
            localStorage.setItem('logged-in', "true");
            this.setState({ isAuthenticated: authenticated });

        });
    // Testing only. In prod we would let the request above update the state
    // this.setState({ isAuthenticated: true, isAuthorized:true })
}


  render() {
    return (
      <div className="Home">
        <Header authenticate={this.props.authenticate}/>
        <ImageCarousel />
        <ArticlesList />
        <ModalDisplay authenticate={this.authenticate} isAuthenticated={this.state.isAuthenticated}/>
      </div>
    );
  }
}

export default Home;
