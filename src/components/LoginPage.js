import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startDemoLogin } from '../actions/auth';

const LoginPage = ({ startLogin, startDemoLogin }) => {
  return (
    <div className="landing">
      <div className="landing__image" />
      <div className="landing__box">
        <h1>HRsoft</h1>
        <h3>
          Database system for managing your potential client, now made easy.
        </h3>
        <button className="landing__btn" onClick={startLogin}>
          <span className="landing__btnText"> Login with Google</span>
        </button>
        <p>
          Please click
          <span onClick={startDemoLogin} className="landing__demoLink">
            {' '}
            here{' '}
          </span>
          for demo login.
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
    startDemoLogin: () => dispatch(startDemoLogin()),
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
