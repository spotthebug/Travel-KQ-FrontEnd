import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';


class MyRoutes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/signup' component={ SignUp } />
        <Route exact path='/login' component={ Login } />

      </Switch>
      );
  }
}

export default MyRoutes;
