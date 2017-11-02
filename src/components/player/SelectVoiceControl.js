import React from "react";
import PropTypes from "prop-types";

const SelectVoiceControl = props => {
  if (!props.voice) {
    return null;
  }
  return (
    <div>
      Select Voice:
      <select value={props.voice.name} onChange={props.handleVoiceSelect}>
        {props.voices.filter(lang => lang.lang === "en-US").map(voice => (
          <option key={voice.name} value={voice.name}>
            {`${voice.name} ${voice.lang}`}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectVoiceControl.propTypes = {
  voice: PropTypes.object.isRequired,
  voices: PropTypes.array.isRequired,
  handleVoiceSelect: PropTypes.func.isRequired,
};

export default SelectVoiceControl;
