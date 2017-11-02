import React from "react";
import {Link} from "react-router-dom";
import NavTitle from "./NavTitle/NavTitle";
import "./Nav.css";

const Nav = () => (
  <nav className="Nav">
    <NavTitle />
    <Link to="/" className="Nav__link">
      Reader
    </Link>
    <Link className="Nav__link" to="/profile">
      Profile
    </Link>
  </nav>
);

export default Nav;
