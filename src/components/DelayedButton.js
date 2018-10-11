// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  clickHandler = (event) => {
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay) //use callback func so that we do not invoke it right away, does the event when it needs to 
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} >ZoZo BUTTon</button>
      </div>
    );
  }

}

export default DelayedButton;
