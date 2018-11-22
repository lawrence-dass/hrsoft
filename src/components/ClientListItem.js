import React from 'react';
import { connect } from 'react-redux';
import { removeClient } from '../actions/clients';
import { Link } from 'react-router-dom';

const ClientListItem = ({ firstName, lastName, id, dispatch }) => {
  // console.log(props);
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>
          {firstName} {lastName}
        </h3>
      </Link>
      <button
        onClick={() => {
          dispatch(removeClient(id));
        }}
      >
        Remove
      </button>
      <Link to={`/edit/${id}`}>
        <button> Edit</button>
      </Link>
    </div>
  );
};

export default connect()(ClientListItem);
