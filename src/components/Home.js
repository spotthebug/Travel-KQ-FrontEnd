import React, { Component } from 'react';
import '../index.css';
import ArticlesList from './ArticlesList';
import ImageCarousel from './Carousel';
import ModalDisplay from './Modal';
import Header from './Header';


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
