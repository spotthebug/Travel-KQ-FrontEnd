import React, { Component } from "react";
import CityList from './cityList';
import CityPage from './cityPage';

class CitiesDisplay extends Component {
  render() {
    return (
      <div>
        <CityList />
        <CityPage />
      </div>
    );
  }
}

export default CitiesDisplay;
