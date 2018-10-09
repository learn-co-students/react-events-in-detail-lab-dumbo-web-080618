import React, {Component} from 'react';

export default class CoordinatesButton extends Component {

  where = (event) => {
    let arr = [];
    arr.push(event.clientX, event.clientY)
    debugger
    this.props.onReceiveCoordinates(arr)
  }

  render(){
  return(
    <button onClick={this.where}></button>
  )
}
}
