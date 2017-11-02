import React from 'react';

const SelectVoiceControl = props => {
  if (!props.voice) {
    return null;
  } else {
    return (
      <div>
        <label>
          Select Voice:
          <select value={props.voice.name} onChange={props.handleVoiceSelect}>
            {props.voices.filter(lang => lang.lang === 'en-US').map(voice => (
              <option key={voice.name} value={voice.name}>
                {voice.name + ' ' + voice.lang}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
};

export default SelectVoiceControl;
