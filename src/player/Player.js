import React, { Component } from 'react';
import PlayerController from './PlayerController';
import VoiceRateControl from './VoiceRateControl';
import SelectVoiceControl from './SelectVoiceControl';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voices: [],
      voice: '',
      rate: 1
    };
    this.handleVoiceSelect = this.handleVoiceSelect.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }

  componentDidMount() {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        this.setState({ voices, voice: voices[0] });
      };
    } else {
      const voices = window.speechSynthesis.getVoices();
      this.setState({ voices, voice: voices[0] });
    }
  }

  handleVoiceSelect(event) {
    const newVoice = this.state.voices.find(
      voice => voice.name === event.target.value
    );
    this.setState({ voice: newVoice });
  }

  handleRateChange(event) {
    this.setState({ rate: event.target.value });
  }

  render() {
    return (
      <div>
        <PlayerController
          voices={this.state.voices}
          voice={this.state.voice}
          rate={this.state.rate}
          text={this.props.text}
          handleRateChange={this.handleRateChange}
        />
        <VoiceRateControl
          rate={this.state.rate}
          handleRateChange={this.handleRateChange}
        />
        <SelectVoiceControl
          voices={this.state.voices}
          voice={this.state.voice}
          handleVoiceSelect={this.handleVoiceSelect}
        />
      </div>
    );
  }
}

export default Player;
