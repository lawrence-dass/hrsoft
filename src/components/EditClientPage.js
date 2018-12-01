import React from 'react';
import ClientForm from './ClientForm';
import { connect } from 'react-redux';
import { editClient } from '../actions/clients';

export class EditClientPage extends React.Component {
  onSubmit = client => {
    this.props.editClient(this.props.client.id, client);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ClientForm client={this.props.client} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.find(client => client.id === props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editClient: (id, client) => {
      console.log(id, client);
      return dispatch(editClient(id, client));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditClientPage);
