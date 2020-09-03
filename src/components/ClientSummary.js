import React from 'react';
import { connect } from 'react-redux';
import getVisibleClients from '../selectors/clients';
import { Link } from 'react-router-dom';

export const ClientSummary = ({ ClientCount }) => {
  const clientWord = ClientCount === 1 ? 'client' : 'clients';
  return (
    <div className="clientListSummary">
      <div className="clientListSummary__container">
        <h1>
          Viewing{' '}
          <span className="clientListSummary__special">{ClientCount} </span>{' '}
          {clientWord} based on set filters.
        </h1>
        <Link className="clientListSummary__addClient" to="/create">
          Add Client
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleClient = getVisibleClients(state.clients, state.filters);
  return {
    ClientCount: visibleClient.length,
  };
};

export default connect(mapStateToProps)(ClientSummary);
