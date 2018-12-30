import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
  return (
    <div className="landing">
      <div className="landing__box">
        <h1> HRsoft</h1>
        <h3>
          Database system for managing your potential client, now made easy.
        </h3>
        <button onClick={startLogin}> Login </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
