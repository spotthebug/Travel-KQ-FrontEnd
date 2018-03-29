import React, { Component } from 'react';
import Header from './header';
import CitiesDisplay from './components/citiesDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CitiesDisplay />
      </div>
    );
  }
}

export default App;
