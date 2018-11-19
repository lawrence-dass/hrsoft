import React from 'react';
import { connect } from 'react-redux';
import { removeClient } from '../actions/clients';

const ClientListItem = ({ firstName, lastName, id, dispatch }) => {
  // console.log(props);
  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <button
        onClick={() => {
          dispatch(removeClient(id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ClientListItem);
