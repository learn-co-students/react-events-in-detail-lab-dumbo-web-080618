import React, { Component } from "react";

class DelayedButton extends Component {
  handleClick = event => {
    event.persist(); //If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick} />;
  }
}

export default DelayedButton;
