import React, { Component } from 'react';

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
    this.read = this.read.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.cancel = this.cancel.bind(this);
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

  read(event) {
    var utterance = new SpeechSynthesisUtterance(this.props.text);
    utterance.voice = this.state.voices.find(
      voice => voice.name === this.state.voice.name
    );
    utterance.rate = this.state.rate;
    console.log(utterance.rate);
    window.speechSynthesis.speak(utterance);
  }

  pause() {
    window.speechSynthesis.pause();
  }

  resume() {
    window.speechSynthesis.resume();
  }

  cancel() {
    window.speechSynthesis.cancel();
  }

  render() {
    return (
      <div>
        <div>
          Reader Voice: <strong>{this.state.voice.name}</strong>
        </div>
        <div>
          <button onClick={this.read}>Start Talking</button>
          <button onClick={this.pause}>Pause</button>
          <button onClick={this.resume}>Resume</button>
          <button onClick={this.cancel}>Stop</button>
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
