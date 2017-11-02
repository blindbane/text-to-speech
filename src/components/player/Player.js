import React, {Component} from "react";
import PropTypes from "prop-types";
import PlayerController from "./PlayerController";
import VoiceRateControl from "./VoiceRateControl";
import SelectVoiceControl from "./SelectVoiceControl";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 1,
    };

    this.handleRateChange = this.handleRateChange.bind(this);
  }

  handleRateChange(event) {
    this.setState({rate: event.target.value});
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

Player.propTypes = {
  voices: PropTypes.array.isRequired,
  voice: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  handleVoiceSelect: PropTypes.string.isRequired,
};

export default Player;
