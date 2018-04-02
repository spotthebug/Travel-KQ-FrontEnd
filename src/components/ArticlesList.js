import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';

class ArticlesList extends Component {
  render() {
    let allArticles = ["The gladdest moment in human life, me thinks, is a departure into unknown lands.", "Sir Richard Burton ", "Be fearless in the pursuit of what sets your soul on fire.", "Jennifer Lee", "Travel makes one modest. You see what a tiny place you occupy in the world.", "Gustav Flaube" ];

    return(
      <Grid>
        <h1>Wayfarer is ... </h1>

        <Row className="show-grid">
          <Col xs={6} md={4}>
            <br />
            <h2>{allArticles[1]}</h2>
            <p>{allArticles[0]}</p>
          </Col>
          <Col xs={6} md={4}>
            <br />
            <h2>{allArticles[3]}</h2>
            <p>{allArticles[2]}</p>
          </Col>
          <Col xs={6} md={4}>
            <br />
            <h2>{allArticles[5]}</h2>
            <p>{allArticles[4]}</p>
          </Col>
        </Row>
      </Grid>

      );
  }
}

export default ArticlesList;
