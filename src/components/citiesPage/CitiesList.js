import React, { Component } from "react";
import City from './city';

class CitiesList extends Component {

  render() {
    return (
      <div>
        <div>
          {this.props.cities.map(city =>
            <City city={city} show={this.props.show}/>
          )}
        </div>
      </div>
    );
  }


}

export default CitiesList;
