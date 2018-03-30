import React, { Component } from 'react';

class ArticlesList extends Component {
  render() {
    let allArticles = ["The gladdest moment in human life, me thinks, is a departure into unknown lands.", "Sir Richard Burton ", "Be fearless in the pursuit of what sets your soul on fire.", "Jennifer Lee", "Travel makes one modest. You see what a tiny place you occupy in the world.", "Gustav Flaube" ];

    return(
      <div className="row articlesList">
        <h2>Wayfarer is ... </h2>
        <div className="col s4 about">
        <h3> {allArticles[1]} </h3>
        <p> {allArticles[0]} </p>
        </div>
        <div className="col s4 about">
        <h3> {allArticles[3]} </h3>
        <p> {allArticles[2]} </p>
        </div>
        <div className="col s4 about">
        <h3> {allArticles[5]} </h3>
        <p> {allArticles[4]} </p>
        </div>
      </div>

      );
  }
}

export default ArticlesList;
