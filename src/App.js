import React, { Component } from 'react';
import Home from './components/Home';
import './index.css';
import { Route, Link } from "react-router-dom";
import CitiesDisplay from './components/citiesPage/citiesDisplay';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Profile from './components/profilePage/profile';
import Header from './components/Header';


class App extends Component {

  render() {

    return (
      <div>
        <Header />

        <div>
          <Route exact path='/' component={ Home } />
          <Route path='/signup' component={ SignUp } />
          <Route path='/login' component={ Login } />
          <Route path='/cities' component={ CitiesDisplay } />
          <Route path="/profile" component={ Profile }/>
        </div>
      </div>
    )
  }
}

export default App;
