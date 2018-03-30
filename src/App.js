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
          <a>Wayfarer</a>
          <Link to="/cities">Cities</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/search">Search</Link>
        </nav>
        <main>
          <Route path="/cities" render={() => (<CitiesDisplay />)}/>
          <Route path="/profile" render={() => (<ProfilePage />)}/>
        </main>
      </div>
    )
  }
}



export default App;
