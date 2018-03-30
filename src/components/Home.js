import React, { Component } from 'react';
import Header from './Header';
import '../index.css';
import '../materialize/css/materialize.css';
import ArticlesList from './ArticlesList';
import Login from './Login';
import SignUp from './SignUp';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <img className="sf" src="https://images.unsplash.com/photo-1450149632596-3ef25a62011a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc4d990379577e86ca11609d7af3000a&auto=format&fit=crop&w=1016&q=80" />
        <ArticlesList />
        <Login />
        <SignUp />

      </div>
    );
  }
}

export default Home;
