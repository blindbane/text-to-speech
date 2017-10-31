import React, { Component } from 'react';
import PlayButton from './player/PlayButton';
import StopButton from './player/StopButton';
import PauseButton from './player/PauseButton';
import ResumeButton from './player/ResumeButton';

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
        <div>
          <PlayButton
            voices={this.state.voices}
            voice={this.state.voice}
            rate={this.state.rate}
            text={this.props.text}
          />
          <PauseButton />
          <ResumeButton />
          <StopButton />
        </div>
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
        <div>
          <label>
            Speed:
            <select value={this.state.rate} onChange={this.handleRateChange}>
              <option key="slow" value={0.75}>
                Slow
              </option>
              <option key="normal" value={1.0}>
                Normal
              </option>
              <option key="fast" value={2.0}>
                Fast
              </option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Player;
