import React, { Component } from 'react';

class PauseButton extends Component {
  constructor(props) {
    super(props);
    this.pause = this.pause.bind(this);
  }
  pause() {
    window.speechSynthesis.pause();
  }
  render() {
    return (
      <div>
        <button onClick={this.pause}>Pause</button>
      </div>
    );
  }
}

export default PauseButton;
