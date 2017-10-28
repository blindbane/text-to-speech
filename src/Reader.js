import React, { Component } from 'react';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: 'Call me Ishmael.',
      voices: [],
      voice: ''
    };
    this.handleVoiceSelect = this.handleVoiceSelect.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
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

  handleTextInput(event) {
    this.setState({
      textAreaValue: event.target.value
    });
  }

  read(event) {
    var utterance = new SpeechSynthesisUtterance(this.state.textAreaValue);
    utterance.voice = this.state.voices.find(
      voice => voice.name === this.state.voice.name
    );
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
      <div className="App">
        <h2>
          Reader Voice: <strong>{this.state.voice.name}</strong>
        </h2>

        <button onClick={this.read}>Start Talking</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.resume}>Resume</button>
        <button onClick={this.cancel}>Stop</button>
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
        <p className="App-intro">
          <textarea
            onChange={this.handleTextInput}
            value={this.state.textAreaValue}
            cols="100"
            rows="30"
          />
        </p>
      </div>
    );
  }
}

export default Reader;
