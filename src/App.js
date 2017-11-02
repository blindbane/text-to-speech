/* eslint react/no-did-mount-set-state: "off" */

import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {auth} from "./firebase";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Reader from "./components/Reader/Reader";
import Profile from "./components/Profile/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      user: null,
      voices: [],
      voice: null,
    };
    this.handleVoiceSelect = this.handleVoiceSelect.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({
        user: currentUser,
      });
    });

    // gets voices on client's computer
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        this.setState({voices, voice: voices[0]});
      };
    } else {
      const voices = window.speechSynthesis.getVoices();
      this.setState({voices, voice: voices[0]});
    }
  }

  handleVoiceSelect(event) {
    const newVoice = this.state.voices.find(
      voice => voice.name === event.target.value,
    );
    this.setState({voice: newVoice});
  }

  render() {
    const {user, voices, voice} = this.state;

    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Reader
                  voices={voices}
                  voice={voice}
                  handleVoiceSelect={this.handleVoiceSelect}
                />
              )}
            />
            <Route path="/profile" render={() => <Profile user={user} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
