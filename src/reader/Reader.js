import React, { Component } from 'react';
import Player from './Player';

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
      <div className="App">
        <Player text={this.state.textAreaValue} />
        <p className="App-intro">
          <textarea
            onChange={this.handleTextInput}
            value={this.state.textAreaValue}
            cols="100"
            rows="30"
          />
        </p>
      </div>
    );
  }
}

export default Reader;
