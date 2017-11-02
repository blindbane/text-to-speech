import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "./../shared/Button/Button";
import synth from "./speechUtils/SpeechSynth";

import createSpeechUtterance from "./speechUtils/createSpeechUtterance";

class PlayerController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isPaused: false,
    };
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
  }

  play(utterance) {
    this.setState({
      isPlaying: true,
    });
    synth.play(utterance);
  }

  stop() {
    this.setState({
      isPlaying: false,
      isPaused: false,
    });
    synth.stop();
  }

  pause() {
    this.setState({
      isPaused: true,
    });
    synth.pause();
  }

  resume() {
    this.setState({
      isPaused: false,
    });
    synth.resume();
  }

  render() {
    const {text, rate, voice, voices} = this.props;
    const utterance = createSpeechUtterance(
      text,
      rate,
      voice,
      voices,
      this.stop,
    );
    const {isPaused, isPlaying} = this.state;
    return (
      <div>
        {!isPlaying && (
          <Button handleClick={() => this.play(utterance)} name="Play" />
        )}
        {isPlaying &&
          !isPaused && <Button handleClick={() => this.pause()} name="Pause" />}
        {isPlaying &&
          isPaused && (
            <Button handleClick={() => this.resume()} name="Resume" />
          )}
        {isPlaying && <Button handleClick={() => this.stop()} name="Stop" />}
      </div>
    );
  }
}

PlayerController.propTypes = {
  text: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  voices: PropTypes.array.isRequired,
  voice: PropTypes.object.isRequired,
};

export default PlayerController;
