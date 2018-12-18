import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Hrsoft</h1>
    <NavLink to="/" activeClassName="isActive" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="isActive">
      Add Client
    </NavLink>
    <button onClick={startLogout}> Logout </button>
  </header>
);

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
