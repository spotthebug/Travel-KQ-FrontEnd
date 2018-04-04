import React, { Component } from 'react';
import '../index.css';
import ArticlesList from './ArticlesList';
import ImageCarousel from './Carousel';

import SignUp from './SignUp';
import Login from './Login';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ImageCarousel />
        <ArticlesList />
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default Home;
