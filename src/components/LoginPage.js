import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = ({ startLogin }) => {
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
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
