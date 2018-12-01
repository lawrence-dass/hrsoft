import React from 'react';
import ClientForm from './ClientForm';
import { connect } from 'react-redux';
import { addClient } from '../actions/clients';

export class AddClientPage extends React.Component {
  onSubmit = client => {
    this.props.addClient(client);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1> Add New Client </h1>
        <ClientForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addClient: client => dispatch(addClient(client))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddClientPage);
