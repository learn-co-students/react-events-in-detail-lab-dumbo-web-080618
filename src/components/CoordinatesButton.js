// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  // constructor(onReceiveCoordinates) {
  //
  // }
  onReceiveCoordinates = (e) => {
    let arr = [e.clientX, e.clientY]
    return this.props.onReceiveCoordinates(arr)
  }

  render () {
    return (
    <button onClick={this.onReceiveCoordinates} type="button">CoordinatesButton</button>
  )
  }
}
