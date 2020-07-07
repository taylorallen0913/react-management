import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar--dark">
      <div className="navbar__inner">
        <div className="navbar__items">
          <Link to="/" className="navbar__brand navbar-header">
            React Management
          </Link>
          {/* <a className="navbar__item navbar__link" href="#url">
            Docs
          </a> */}
        </div>
        {/*
        <div className="navbar__items navbar__items--right">
        </div>
        */}
      </div>
    </nav>
  );
};

export default Navbar;
