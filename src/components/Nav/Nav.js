import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="Nav">
    <Link className="Nav__link" to="/">
      FreeReader
    </Link>
    <Link className="Nav__link" to="/profile">
      Profile
    </Link>
  </nav>
);

export default Nav;
