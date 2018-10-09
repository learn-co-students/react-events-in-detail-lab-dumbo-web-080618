// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  // constructor(onReceiveCoordinates) {
  //
  // }

  handleOnDelayedClick = (e) => {
    e.persist()
    let x = this.props.onDelayedClick
    // console.log(e)
    setTimeout(function() {x(e)}, this.props.delay)
  }

  render () {
    return (
    <button onClick={this.handleOnDelayedClick}  type="button">DelayedButton</button>
  )
  }
}
