// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  track = (event) =>{
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button
      onClick={this.track}
      >
        Delay
      </button>
    )
  }
}
