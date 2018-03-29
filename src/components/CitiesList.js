import React, { Component } from "react";
import City from './City';

class CitiesList extends Component {

  render() {
    return (
      <div>
      <ul>
        {this.props.cities.map(city =>
          <City city={city} show={this.props.show}/>
        )}
      </ul>
      </div>
    );
  }


}

export default CitiesList;
