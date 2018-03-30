import React, { Component } from "react";

class City extends Component {
  constructor(props) {
    super(props);

    this.showCity = this.showCity.bind(this);
  }

  showCity() {
    this.props.show(this.props.city.id);
  }


  render() {
    return (
      <div>
        <li className="cityListItem" key={this.props.city.id}>
          {this.props.city.title}
          <button onClick={this.showCity}>show city</button>
        </li>
      </div>
    );
  }
}

export default City;
