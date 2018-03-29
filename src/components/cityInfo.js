import React, { Component } from "react";

class CityInfo extends Component {

  render() {
    console.log("page info", this.props.data[0].title)

    return (
      <h1>{this.props.data[0].title}</h1>
    );
  }
}

export default CityInfo;
