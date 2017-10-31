import React, { Component } from 'react';

class PlayButton extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play(event) {
    var utterance = new SpeechSynthesisUtterance(this.props.text);
    utterance.voice = this.props.voices.find(
      voice => voice.name === this.props.voice.name
    );
    utterance.rate = this.props.rate;
    window.speechSynthesis.speak(utterance);
  }
  render() {
    return (
      <div>
        <button onClick={this.play}>Play</button>
      </div>
    );
  }
}

export default PlayButton;
