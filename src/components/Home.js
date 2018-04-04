import React, { Component } from 'react';
import '../index.css';
import ArticlesList from './ArticlesList';
import ImageCarousel from './Carousel';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ImageCarousel />
        <ArticlesList />

      </div>
    );
  }
}

export default Home;
