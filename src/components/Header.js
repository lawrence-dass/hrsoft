import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="header__content">
      <Link className="header__logo" to="/dashboard" exact="true">
        <h1>
          <span className="header__logo--special">HR</span>soft
        </h1>
      </Link>
      <button className="header__button" onClick={startLogout}>
        Logout
      </button>
    </div>
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
