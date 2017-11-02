import React, { Component } from 'react';
import { auth } from './firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Reader from './components/Reader/Reader';
import Profile from './components/Profile/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log(currentUser);
      this.setState({
        user: currentUser
      });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Reader} />
            <Route path="/profile" render={() => <Profile user={user} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
