import React, { Component } from 'react';
import ProfilePage from './components/profilePage/profile';
import CitiesDisplay from './components/citiesPage/citiesDisplay';
import Home from './components/Home';
import MyRoutes from './config/routes'
import {
    Redirect,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Auth from './components/Auth'

class App extends Component {


  render() {

      var myAuth = new Auth;
    if (myAuth.state.isAuthenticated){
      return(

        <div className="App">
           <Home authenticate={ myAuth }/>
           { MyRoutes }
           <CitiesDisplay />
       <nav>
           <a class="logo">WAYFARER</a>
           <Link to="/cities">cities</Link>
           <Link to="/profile">profile</Link>
           <Link to="/login">login</Link>
           <Link to="/search">search</Link>
           <Link to="/search">profile</Link>
         </nav>
         <main>
           <Route path="/cities" component={ CitiesDisplay }/>
           <Route path="/profile" component={ ProfilePage }/>
         </main>
       </div>


      )
    }

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
