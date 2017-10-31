import React from 'react';
import PlayButton from './playerButtons/PlayButton';
import StopButton from './playerButtons/StopButton';
import PauseButton from './playerButtons/PauseButton';
import ResumeButton from './playerButtons/ResumeButton';

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
      <div>
        <label>
          Speed:
          <select value={props.rate} onChange={props.handleRateChange}>
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
};

export default PlayerController;
