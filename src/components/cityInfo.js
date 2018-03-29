import React, { Component } from "react";

class CityInfo extends Component {

  render() {
    console.log("hiiiiii", this.props.data)
    return (
      <div>
      {this.props.data.map(each =>
        <h2 className="title" id={each.id} style={{display: 'none'}} key={each.id}>{each.title}</h2>
      )}
      </div>
    );
  }
}

export default CityInfo;
