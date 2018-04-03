import React, { Component } from 'react';
import Header from './Header';
import '../index.css';
import ArticlesList from './ArticlesList';
import ImageCarousel from './Carousel';
import ModalDisplay from './Modal';
import Login from './Login'
// var Login = require("./Login");


class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Header />
        <ImageCarousel />
        <ArticlesList />
        <ModalDisplay />
      </div>
    );
  }
}

export default Home;
