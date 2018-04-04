import React, { Component } from "react";
import './cityinfo.css';
import PostAddButton from './postAddButton';
import {
  Modal,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import axios from 'axios';

class CityInfo extends Component {
  constructor(props, context){
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      title: "",
      body: "",
      image_url: "",
      alt: ""
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

   handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let title = this.state.title
    let body = this.state.body
    let image_url = this.state.image_url
    let alt = this.state.alt

    axios.post('https://travel-kingqueens.herokuapp.com/api/posts', { title, body, image_url, alt }).then((response) => {
      alert("New Post created!")
    })
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="title" bsSize="large">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="body" bsSize="large">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            onChange={this.handleChange}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="image_url" bsSize="large">
          <ControlLabel>Image</ControlLabel>
          <FormControl
            onChange={this.handleChange}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="alt" bsSize="large">
          <ControlLabel>Image Description</ControlLabel>
          <FormControl
            onChange={this.handleChange}
              type="text"
          />
        </FormGroup>
        <Button bsStyle="primary" block
            bsSize="large"
            type="submit">
            Create Post
        </Button>
      </form>
    );
  }

  render() {
    return (
      <div>
      {this.props.cities.map(each =>
        <div id={"cityinfo" + each._id} className="cityInfo" key={each._id}>
          <div className="country">
            <h2 className="title">{each.name}</h2>
            <h3 className="countryName">Country</h3>
            <div className="postAddButton" id={"button" + each._id}>
            < PostAddButton cityId={each._id} handleShow={this.handleShow } />
            </div>
          </div>
          <div className="imageDiv">
            <img src={each.image_url} />
          </div>
        </div>
      )}
      <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            { this.renderForm() }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CityInfo;
