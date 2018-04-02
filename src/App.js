import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Header from './header';
import CitiesDisplay from './components/citiesPage/citiesDisplay';
import ProfilePage from './components/profilePage/profile';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <a class="logo">WAYFARER</a>
          <Link to="/cities">cities</Link>
          <Link to="/profile">profile</Link>
          <Link to="/login">login</Link>
          <Link to="/search">search</Link>
        </nav>
        <main>
          <Route path="/cities" component={ CitiesDisplay }/>
          <Route path="/profile" component={ ProfilePage }/>
        </main>
      </div>
    )
  }
}



export default App;
