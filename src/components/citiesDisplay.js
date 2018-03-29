import React, { Component } from "react";
import './citiesDisplay.css';
import axios from 'axios';
import CityList from './cityList';
import CityPage from './cityPage';

class CitiesDisplay extends Component {

  constructor(props) {
    super(props);
    this.state= { cities: [] }
  }

  componentDidMount() {
    axios.get('https://www.reddit.com/r/cats.json')
      .then(res => {
        const cities = res.data.data.children.map(obj => obj.data)
        this.setState({ cities });
      })
  }

  render() {
    if (this.state.cities.length !== 0) {
      return (
        <div className="citiesdisplay">
          <CityList data={this.state.cities}/>
          <CityPage data={this.state.cities}/>
        </div>
      );
    } else {
      return null
    }
  }
}

export default CitiesDisplay;
