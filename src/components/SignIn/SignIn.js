import React from "react";
import {auth, googleAuthProvider} from "../../firebase";
import "./SignIn.css";
import Button from "../shared/Button/Button";

const SignIn = () => (
  <Button
    name="Sign In"
    handleClick={() => auth.signInWithPopup(googleAuthProvider)}
  />
);

export default SignIn;
