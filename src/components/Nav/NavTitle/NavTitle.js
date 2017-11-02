import React from 'react';
import { Link } from 'react-router-dom';
import './NavTitle.css';

const NavTitle = () => {
  return (
    <Link to="/">
      <h1 className="NavTitle">FreeReader</h1>
    </Link>
  );
};

export default NavTitle;
