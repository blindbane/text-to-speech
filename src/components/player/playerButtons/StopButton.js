import React, { Component } from 'react';

class StopButton extends Component {
  constructor(props) {
    super(props);
    this.cancel = this.cancel.bind(this);
  }

  cancel() {
    // hides stop btn when playing
    this.props.handleStopClick();

    window.speechSynthesis.cancel();
  }

  render() {
    return <button onClick={this.cancel}>Stop</button>;
  }
}

export default StopButton;
