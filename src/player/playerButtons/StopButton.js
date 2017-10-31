import React, { Component } from 'react';

class StopButton extends Component {
  constructor(props) {
    super(props);
    this.cancel = this.cancel.bind(this);
  }
  cancel() {
    window.speechSynthesis.cancel();
  }
  render() {
    return (
      <div>
        <button onClick={this.cancel}>Stop</button>
      </div>
    );
  }
}

export default StopButton;
