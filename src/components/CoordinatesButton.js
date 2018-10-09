// Code CoordinatesButton Component Here
import React, { Component } from 'react'
export default class CoordinatesButton extends Component{

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
    // console.log()
  }
  render(){
    return(
      <React.Fragment>
        <button
        onClick={this.handleClick}>
        Coordinates Button
        
        </button>
      </React.Fragment>
    )
  }
}