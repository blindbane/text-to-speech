import React from 'react';
import { auth } from '../../firebase';
import './Profile.css';
import SignIn from '../SignIn/SignIn';
import Button from '../shared/Button/Button';

const Profile = props => (
  <div className="Profile">
    {!props.user && <SignIn />}
    {!!props.user && (
      <img
        className="Profile__photo"
        src={props.user.photoURL}
        alt={props.user.displayName}
      />
    )}
    <h4>{!!props.user && props.user.displayName}</h4>
    <h4>{!!props.user && props.user.email}</h4>
    {props.user && (
      <Button name="Sign Out" handleClick={() => auth.signOut()} />
    )}
  </div>
);

export default Profile;
