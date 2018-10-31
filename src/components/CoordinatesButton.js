import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick} />;
  }
}

export default CoordinatesButton;
