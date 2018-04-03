import React, { Component } from "react";
import './city.css';

class City extends Component {
  constructor(props) {
    super(props);

    this.showCity = this.showCity.bind(this);
  }

  showCity() {
    this.props.show(this.props.city._id);
  }


  render() {
    return (
      <button className="cityListItem" key={this.props.city._id} onClick={this.showCity}>{this.props.city.name}</button>
    );
  }
}

export default City;
