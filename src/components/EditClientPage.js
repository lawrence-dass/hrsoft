import React from 'react';
import ClientForm from './ClientForm';
import { connect } from 'react-redux';
import { startEditClient } from '../actions/clients';

export class EditClientPage extends React.Component {
  onSubmit = (client) => {
    console.log(this.props.client.id, '***', client);
    this.props.startEditClient(this.props.client.id, client);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="editClientPage">
        <div className="editClientPage__heading">
          <div className="editClientPage__content">
            <h1>Edit Client Details</h1>
          </div>
        </div>
        <ClientForm client={this.props.client} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.find((client) => client.id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startEditClient: (id, client) => {
      return dispatch(startEditClient(id, client));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditClientPage);
