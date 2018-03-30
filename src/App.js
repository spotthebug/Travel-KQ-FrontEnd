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
          <Link to=""></Link>
          <Link to=""></Link>
        </nav>
        <main>
          <Route path="" render={<CitiesDisplay />}/>
          <Route path="" render={<ProfilePage />}/>
        </main>
      </div>
    )
  }
}



export default App;
