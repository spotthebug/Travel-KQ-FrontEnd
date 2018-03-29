import React, { Component } from "react";
import City from "./city";

class CityList extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <City data={this.props.data}/>
      </div>
    );
  }
}

export default CityList;
