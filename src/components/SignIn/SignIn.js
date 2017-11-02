import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../../firebase';
import './SignIn.css';
import Button from '../shared/Button/Button';

class SignIn extends Component {
  render() {
    return (
      <Button
        name="Sign In"
        handleClick={() => auth.signInWithPopup(googleAuthProvider)}
      />
    );
  }
}

export default SignIn;
