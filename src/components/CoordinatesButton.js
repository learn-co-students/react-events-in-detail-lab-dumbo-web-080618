// Code CoordinatesButton Component Here


import React, { Component } from 'react';

class CoordinatesButton extends Component {
  // CoordinatesButton(){


  clickHandler = (event) => {
    {this.props.onReceiveCoordinates([event.clientX, event.clientY])}
  }

  render() {
    return (
      <div>
        <button className="Vadim" onClick={this.clickHandler} >Vadim's BUTTon</button>
      </div>
    );
  }

}

export default CoordinatesButton;
