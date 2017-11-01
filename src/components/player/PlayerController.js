import React, { Component } from 'react';
import PlayButton from './playerButtons/PlayButton';
import StopButton from './playerButtons/StopButton';
import PauseButton from './playerButtons/PauseButton';
import ResumeButton from './playerButtons/ResumeButton';

import createSpeechUtterance from './speechUtils/createSpeechUtterance';

class PlayerController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isPaused: false
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
  }

  handlePlayClick() {
    this.setState({
      isPlaying: true
    });
  }

  handleStop() {
    this.setState({
      isPlaying: false,
      isPaused: false
    });
  }

  handlePauseClick() {
    this.setState({
      isPaused: true
    });
  }

  handleResumeClick() {
    this.setState({
      isPaused: false
    });
  }

  render() {
    const utterance = createSpeechUtterance(
      this.props.text,
      this.props.rate,
      this.props.voice,
      this.props.voices,
      this.handleStop
    );
    return (
      <div>
        {!this.state.isPlaying && (
          <PlayButton
            handlePlayClick={this.handlePlayClick}
            utterance={utterance}
          />
        )}
        {this.state.isPlaying &&
          !this.state.isPaused && (
            <PauseButton handlePauseClick={this.handlePauseClick} />
          )}
        {this.state.isPlaying &&
          this.state.isPaused && (
            <ResumeButton handleResumeClick={this.handleResumeClick} />
          )}
        {this.state.isPlaying && (
          <StopButton handleStopClick={this.handleStop} />
        )}
      </div>
    );
  }
}

export default PlayerController;

// voices={this.props.voices}
// voice={this.props.voice}
// rate={this.props.rate}
// text={this.props.text}
