import React, { Component } from 'react';
import CitiesDisplay from './components/citiesDisplay';
import Home from './components/Home';
import MyRoutes from './config/routes'

class App extends Component {

  render() {

    return (
       <div className="App">
          <Home />
          { MyRoutes }
          <CitiesDisplay />
      </div>
    );
  }
}

export default App;




