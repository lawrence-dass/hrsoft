import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Hrsoft</h1>
    <NavLink to="/" activeClassName="isActive" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="isActive">
      Add Client
    </NavLink>
    <NavLink to="/help" activeClassName="isActive">
      Help
    </NavLink>
  </header>
);

export default Header;
