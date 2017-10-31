import React from 'react';

const VoiceRateControl = props => {
  return (
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
  );
};

export default VoiceRateControl;
