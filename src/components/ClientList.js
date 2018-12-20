import React from 'react';
import { connect } from 'react-redux';
import ClientListItem from './ClientListItem';
import getVisibleClients from '../selectors/clients';

export const ClientList = props => (
  <div>
    <div className="clientListHeading">
      <p> Client Name </p>
      <p> Email </p>
      <p> Phone </p>
      <p> Gender </p>
      <p> Address </p>
      <p> Status </p>
      <p> Profession/Field </p>
      <p> Member Type </p>
      <p> Last Communication </p>
      <p> Action </p>
      <p> Action </p>
    </div>
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
