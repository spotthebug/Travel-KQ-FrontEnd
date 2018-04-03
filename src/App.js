import React, { Component } from 'react';
<<<<<<< HEAD
import Home from './components/Home';
import './index.css';
=======
import { Route, Link } from "react-router-dom";
import './header.css';
>>>>>>> de929eb774f8f600e2f673087f31bea9bad24af6
import CitiesDisplay from './components/citiesPage/citiesDisplay';
import {Link, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Profile from './components/profilePage/profile';

class App extends Component {

  render() {

    return (
<<<<<<< HEAD
       <div className="App">
       <div>
        <Route exact path='/' component={ Home } />
        <Route path='/signup' component={ SignUp } />
        <Route path='/login' component={ Login } />
        <Route path='/cities' component={ CitiesDisplay } />
        <Route path="/profile" component={ Profile }/>
      </div>

=======
      <div>
        <nav>
          <a className="logo">WAYFARER</a>
          <Link to="/cities">cities</Link>
          <Link to="/profile">profile</Link>
          <Link to="/login">login</Link>
          <Link to="/search">search</Link>
        </nav>
        <main>
          <Route path="/cities" component={ CitiesDisplay }/>
          <Route path="/profile" component={ ProfilePage }/>
        </main>
>>>>>>> de929eb774f8f600e2f673087f31bea9bad24af6
      </div>
    )
  }
}

export default App;




