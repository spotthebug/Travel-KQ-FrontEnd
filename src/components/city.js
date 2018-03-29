import React, { Component } from "react";

class City extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("hello!", this.props)
    return (
      <div>
      <ul>
        {this.props.data.map(data =>
          <li class="cityListItem" key={data.id}>{data.title}</li>
        )}
      </ul>
      </div>
    );
  }
}

export default City;
