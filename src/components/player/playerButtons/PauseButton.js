import React, { Component } from 'react';

class PauseButton extends Component {
  constructor(props) {
    super(props);
    this.pause = this.pause.bind(this);
  }

  pause() {
    // hides pause btn when paused
    this.props.handlePauseClick();

    window.speechSynthesis.pause();
  }

  render() {
    return <button onClick={this.pause}>Pause</button>;
  }
}

export default PauseButton;
