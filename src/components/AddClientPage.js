import React from 'react';
import ClientForm from './ClientForm';
import { connect } from 'react-redux';
import { addClient } from '../actions/clients';

const AddClientPage = props => (
  <div>
    <h1> Add New Client </h1>
    <ClientForm
      onSubmit={client => {
        props.dispatch(addClient(client));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddClientPage);
