import React, { Component } from 'react';

class ResumeButton extends Component {
  constructor(props) {
    super(props);
    this.resume = this.resume.bind(this);
  }

  resume() {
    // hides resume btn when playing
    this.props.handleResumeClick();

    window.speechSynthesis.resume();
  }

  render() {
    return <button onClick={this.resume}>Resume</button>;
  }
}

export default ResumeButton;
