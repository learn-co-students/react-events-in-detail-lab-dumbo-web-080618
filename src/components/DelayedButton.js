// Code DelayedButton Component Here
import React, { Component } from 'react'
export default class DelayedButton extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  delayAction = (e) => {
    e.persist()
    debugger
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render(){
    return(
      <React.Fragment>
        <button
          onClick={this.delayAction}>
        DelayedButton
        </button>
      </React.Fragment>
    )
  }
}