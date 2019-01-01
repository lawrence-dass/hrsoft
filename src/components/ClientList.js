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
      <p> Priority </p>
      <p> Profession </p>
      <p> Member Type </p>
      <p> Entry Date </p>
      <p> Last Contact </p>
      <p> Actions </p>
    </div>
    <div className="clientListItems">
      {props.clients.length === 0 ? (
        <p> No Clients </p>
      ) : (
        props.clients.map(client => {
          // console.log(client);
          return <ClientListItem key={client.id} {...client} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  // console.log(state);
  return {
    clients: getVisibleClients(state.clients, state.filters)
  };
};

export default connect(mapStateToProps)(ClientList);
