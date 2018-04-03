import React, { Component } from "react";
import './citiesDisplay.css';
import axios from 'axios';
import CitiesList from './CitiesList';
import CityPage from './cityPage';

class CitiesDisplay extends Component {

  constructor(props) {
    super(props);
    this.state= { cities: [] }

    this.show = this.show.bind(this);

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
          <CitiesList cities={this.state.cities} show={this.show}/>
          <CityPage data={this.state.cities} />
        </div>
      );
    } else {
      return null
    }
  }

  show(id) {
    let showitem = document.getElementById(id)
    console.log(showitem)
    let hide = document.querySelectorAll('.title')
    console.log("HIDE", hide)
    hide.forEach(item => {
      item.style.display = "none"
    });
    showitem.style.display = "block"
  }
}

export default CitiesDisplay;