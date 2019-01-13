import React from 'react';
import { connect } from 'react-redux';
import { startRemoveClient } from '../actions/clients';
import { Link } from 'react-router-dom';
import moment from 'moment';
import bin from '../images/bin.svg';
import edit from '../images/edit.svg';
import readMore from '../images/read-more.svg';

export const ClientListItem = ({
  firstName,
  lastName,
  email,
  phone,
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

  return (
    <div className="clientListItem">
      <Link to={`/view/${id}`} className="clientListItem__name">
        <p>
          {firstName} {lastName}{' '}
        </p>
        <img src={readMore} className="readMore" alt="" />
      </Link>

      <p className="clientListItem__email"> {email}</p>
      <p> {phone}</p>
      <p> {priorityRating}</p>
      <p className="clientListItem__profession"> {field || 'No Record'}</p>
      <p className="clientListItem__memberType"> {memberType}</p>
      <p> {moment(createdAt).format('DD/MM/YYYY')}</p>
      <p> {moment(lastCommunication).format('DD/MM/YYYY')}</p>

      <span className="clientListItem__actions">
        <a
          className="clientListItem__button--one"
          onClick={() => {
            if (
              confirm(`Are you sure you wanna delete ${firstName}'s record?`)
            ) {
              dispatch(startRemoveClient({ id }));
            }
          }}
        >
          <img src={bin} className="binLogo" alt="" />
        </a>

        <Link
          to={`/edit/${id}`}
          className="clientListItem__button clientListItem__button--two"
        >
          <img src={edit} className="editLogo" alt="Delete" />
        </Link>
      </span>
    </div>
  );
};

export default connect()(ClientListItem);

//    {gender === 'N/A' ? '' : gender === 'M' ? 'Mr. ' : 'Ms. '}
