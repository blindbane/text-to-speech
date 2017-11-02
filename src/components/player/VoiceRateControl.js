import React from "react";
import PropTypes from "prop-types";

const VoiceRateControl = props => (
  <div>
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
  </div>
);

VoiceRateControl.propTypes = {
  rate: PropTypes.number.isRequired,
  handleRateChange: PropTypes.func.isRequired,
};

export default VoiceRateControl;
