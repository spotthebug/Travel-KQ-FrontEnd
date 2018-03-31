import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class ImageCarousel extends Component {
  render() {
    return(
      <Carousel className>
        <Carousel.Item>
          <img className="image-sizing" alt="Golden Gate Bridge" src="https://images.unsplash.com/photo-1450149632596-3ef25a62011a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc4d990379577e86ca11609d7af3000a&auto=format&fit=crop&w=1016&q=80" />
          <Carousel.Caption>
            <h3>Golden Gate Bridge</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image-sizing" alt="Swiss Alps" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4447cdaa92325a8040472b6e33da135b&auto=format&fit=crop&w=1050&q=80" />
          <Carousel.Caption>
            <h3>Gorgeous Glaciers</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image-sizing" alt="Whale Splashing" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4447cdaa92325a8040472b6e33da135b&auto=format&fit=crop&w=1050&q=80" />
          <Carousel.Caption>
            <h3>Whale Spotting at Maui</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      );
  }
}

export default ImageCarousel;
