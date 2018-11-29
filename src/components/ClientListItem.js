import React from 'react';
import { connect } from 'react-redux';
import { removeClient } from '../actions/clients';
import { Link } from 'react-router-dom';

export const ClientListItem = ({ firstName, lastName, id, dispatch }) => {
  // console.log(props);
  return (
    <div className="clientListItem">
      <Link to={`/edit/${id}`} className="clientListItem__name">
        <p>
          {firstName} {lastName}
        </p>
      </Link>
      <div>
        <a
          className="clientListItem__button clientListItem__button--one"
          onClick={() => {
            dispatch(removeClient({ id }));
          }}
        >
          Remove
        </a>
      </div>

      <Link
        to={`/edit/${id}`}
        className="clientListItem__button clientListItem__button--two"
      >
        Edit
      </Link>
    </div>
  );
};

export default connect()(ClientListItem);
