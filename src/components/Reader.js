import React, { Component } from 'react';
import Player from './player/Player';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: 'Call me Ishmael.'
    };
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(event) {
    this.setState({
      textAreaValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Player text={this.state.textAreaValue} />
        <div>
          <textarea
            onChange={this.handleTextInput}
            value={this.state.textAreaValue}
            cols="100"
            rows="30"
          />
        </div>
      </div>
    );
  }
}

export default Reader;
