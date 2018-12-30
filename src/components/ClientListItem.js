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
  priority = 'N/A',
  field = 'N/A',
  memberType = 'N/A',
  createdAt,
  lastCommunication = 'N/A',
  id,
  dispatch
}) => {
  let priorityRating;
  switch (parseInt(priority)) {
    case 5:
      priorityRating = 'Very High';
      break;
    case 4:
      priorityRating = 'High';
      break;
    case 3:
      priorityRating = 'Medium';
      break;
    case 2:
      priorityRating = 'Low';
      break;
    case 1:
      priorityRating = 'Dormant';
      break;
    default:
      priorityRating = 'N/A';
  }
  console.log(gender);

  return (
    <div className="clientListItem">
      <Link to={`/view/${id}`} className="clientListItem__name">
        <p>
          {gender === 'N/A' ? '' : gender === 'M' ? 'Mr. ' : 'Ms. '}
          {firstName} {lastName}
        </p>
      </Link>

      <p> {email}</p>
      <p> {phone}</p>
      <p> {gender}</p>
      <p> {address}</p>
      <p> {priorityRating}</p>
      <p> {field || 'No Record'}</p>
      <p> {memberType}</p>
      <p> {moment(createdAt).format('DD/MM/YYYY')}</p>
      <p> {moment(lastCommunication).format('DD/MM/YYYY')}</p>

      <a
        className="clientListItem__butt on--one"
        onClick={() => {
          if (confirm(`Are you sure you wanna delete ${firstName}'s record?`)) {
            dispatch(startRemoveClient({ id }));
          }
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
