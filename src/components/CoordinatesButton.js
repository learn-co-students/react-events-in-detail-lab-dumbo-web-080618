// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }

  handleClick = (event) => {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x, y])
  }
}

export default CoordinatesButton
