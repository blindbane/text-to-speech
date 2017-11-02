import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Reader.css";
import Player from "./../Player/Player";

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: "Call me Ishmael.",
    };
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(event) {
    this.setState({
      textAreaValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="Reader">
        <Player
          text={this.state.textAreaValue}
          voices={this.props.voices}
          voice={this.props.voice}
          handleVoiceSelect={this.props.handleVoiceSelect}
        />
        <div>
          <textarea
            onChange={this.handleTextInput}
            value={this.state.textAreaValue}
            cols="100"
            rows="30"
          />
        </div>
      </div>
    );
  }
}

Reader.propTypes = {
  voices: PropTypes.array.isRequired,
  voice: PropTypes.object.isRequired,
  handleVoiceSelect: PropTypes.func.isRequired,
};

export default Reader;
