import React, { Component } from 'react';
import Header from './components/Header'
import './index.css'
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Carousel />
      </div>
    );
  }
}

export default App;
