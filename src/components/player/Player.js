import React, { Component } from 'react';
import PlayerController from './PlayerController';
import VoiceRateControl from './VoiceRateControl';
import SelectVoiceControl from './SelectVoiceControl';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 1
    };
    // this.handleVoiceSelect = this.handleVoiceSelect.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }

  // handleVoiceSelect(event) {
  //   const newVoice = this.props.voices.find(
  //     voice => voice.name === event.target.value
  //   );
  //   this.setState({ voice: newVoice });
  // }

  handleRateChange(event) {
    this.setState({ rate: event.target.value });
  }

  render() {
    return (
      <div>
        <PlayerController
          voices={this.props.voices}
          voice={this.props.voice}
          rate={this.state.rate}
          text={this.props.text}
          handleRateChange={this.handleRateChange}
        />
        <VoiceRateControl
          rate={this.state.rate}
          handleRateChange={this.handleRateChange}
        />
        <SelectVoiceControl
          voices={this.props.voices}
          voice={this.props.voice}
          handleVoiceSelect={this.props.handleVoiceSelect}
        />
      </div>
    );
  }
}

export default Player;
