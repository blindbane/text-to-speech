import React, { Component } from 'react';

class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play(event) {
    // hide play btn on click
    this.props.handlePlayClick();

    window.speechSynthesis.speak(this.props.utterance);
  }

  render() {
    return <button onClick={this.play}>Play</button>;
  }
}

export default PlayButton;
