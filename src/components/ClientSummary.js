import React from 'react';
import { connect } from 'react-redux';
import getVisibleClients from '../selectors/clients';

export const ClientSummary = ({ ClientCount }) => {
  console.log(ClientCount);
  const clientWord = ClientCount === 1 ? 'client' : 'clients';
  return (
    <div>
      <h1>
        Viewing {ClientCount} {clientWord} based on set filters.
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleClient = getVisibleClients(state.clients, state.filters);
  return {
    ClientCount: visibleClient.length
  };
};

export default connect(mapStateToProps)(ClientSummary);
