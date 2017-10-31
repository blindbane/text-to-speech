import React, { Component } from 'react';

class ResumeButton extends Component {
  constructor(props) {
    super(props);
    this.resume = this.resume.bind(this);
  }
  resume() {
    window.speechSynthesis.resume();
  }
  render() {
    return (
      <div>
        <button onClick={this.resume}>Resume</button>
      </div>
    );
  }
}

export default ResumeButton;
