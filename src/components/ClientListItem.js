import React from 'react';
import { connect } from 'react-redux';
import { startRemoveClient } from '../actions/clients';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ClientListItem = ({
  firstName,
  lastName,
  email,
  phone,
  gender = 'N/A',
  address,
  status = 'N/A',
  field = 'N/A',
  memberType = 'N/A',
  createdAt,
  lastCommunication = 'N/A',
  id,
  dispatch
}) => {
  return (
    <div className="clientListItem">
      <Link to={`/view/${id}`} className="clientListItem__name">
        <p>
          {firstName} {lastName}
        </p>
      </Link>

      <p> {email}</p>
      <p> {phone}</p>
      <p> {gender}</p>
      <p> {address}</p>
      <p> {status}</p>
      <p> {field || 'No Record'}</p>
      <p> {memberType}</p>
      <p> {moment(createdAt).format('DD/MM/YYYY')}</p>
      <p> {moment(lastCommunication).format('DD/MM/YYYY')}</p>

      <a
        className="clientListItem__button--one"
        onClick={() => {
          dispatch(startRemoveClient({ id }));
        }}
      >
        Remove
      </a>

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
