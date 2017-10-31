import React from 'react';
import PlayButton from './playerButtons/PlayButton';
import StopButton from './playerButtons/StopButton';
import PauseButton from './playerButtons/PauseButton';
import ResumeButton from './playerButtons/ResumeButton';
import VoiceRateControl from './VoiceRateControl';

const PlayerController = props => {
  return (
    <div>
      <PlayButton
        voices={props.voices}
        voice={props.voice}
        rate={props.rate}
        text={props.text}
      />
      <PauseButton />
      <ResumeButton />
      <StopButton />
      <VoiceRateControl
        rate={props.rate}
        handleRateChange={props.handleRateChange}
      />
    </div>
  );
};

export default PlayerController;
