import React from 'react';
import { connect } from 'react-redux';
import ClientListItem from './ClientListItem';
import getVisibleClients from '../selectors/clients';

export const ClientList = props => (
  <div>
    {props.clients.length === 0 ? (
      <p> No Clients </p>
    ) : (
      props.clients.map(client => {
        return <ClientListItem key={client.id} {...client} />;
      })
    )}
    {}
  </div>
);

const mapStateToProps = state => {
  // console.log(state);
  return {
    clients: getVisibleClients(state.clients, state.filters)
  };
};

export default connect(mapStateToProps)(ClientList);
