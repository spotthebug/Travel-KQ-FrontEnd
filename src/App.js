import React, { Component } from 'react';
import Home from './components/Home';
import './index.css';
import CitiesDisplay from './components/citiesPage/citiesDisplay';
import {Link, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Profile from './components/profilePage/profile';

class App extends Component {

  render() {

    return (
       <div className="App">
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




