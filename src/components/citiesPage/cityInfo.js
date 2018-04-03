import React, { Component } from "react";
import './cityinfo.css';
import PostAddButton from "./postAddButton";

class CityInfo extends Component {

  render() {
    return (
      <div>
      {this.props.cities.map(each =>
        <div id={each._id} className="cityInfo" key={each._id}>
          <div className="country">
            <h2 className="title">{each.name}</h2>
            <h3 className="countryName">Country</h3>
            <div className="postAddButton" id={each._id}>
            < PostAddButton cityId={each._id} />
            </div>
          </div>
          <div className="imageDiv" style={ {
            background: "url('" + each.image_url + "') no-repeat center center",
            backgroundSize: "cover"
          } }>
          </div>
        </div>
      )}
      </div>
    );
  }
}

export default CityInfo;
