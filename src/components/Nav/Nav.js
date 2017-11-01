import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import './Nav.css';

const Nav = () => (
  <nav className="Nav">
    <Title />
    <Link className="Nav__link" to="/">
      Reader
    </Link>
    <Link className="Nav__link" to="/profile">
      Profile
    </Link>
  </nav>
);

export default Nav;
