import React, { Component } from 'react';
import PlayerController from './PlayerController';
import VoiceRateControl from './VoiceRateControl';

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
    event.preventDefault();
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
        <div>
          Reader Voice: <strong>{this.state.voice.name}</strong>
        </div>
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
        <div>
          <label>
            Select Voice:
            <select
              value={this.state.voice.name}
              onChange={this.handleVoiceSelect}
            >
              {this.state.voices
                .filter(lang => lang.lang === 'en-US')
                .map(voice => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name + ' ' + voice.lang}
                  </option>
                ))}
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Player;
