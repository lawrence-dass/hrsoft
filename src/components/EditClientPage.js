import React from 'react';
import { connect } from 'react-redux';
import ClientForm from './ClientForm';
import { editClient } from '../actions/clients';

const EditClientPage = props => {
  console.log(props);
  return (
    <div>
      <ClientForm
        client={props.client}
        onSubmit={client => {
          props.dispatch(editClient(props.client.id, client));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.find(client => client.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditClientPage);
