// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {
  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    console.log(this.props)
    return (
      <button onClick={this.handleClick}>Delayed Click!</button>
    )
  }

}

export default DelayedButton
