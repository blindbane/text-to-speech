import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = props => (
  <button className="Button" onClick={props.handleClick}>
    {props.name}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
