import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './header.css';
import ProfilePage from './components/profilePage/profile';
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




