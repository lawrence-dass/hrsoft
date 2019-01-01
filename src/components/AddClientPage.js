import React from 'react';
import ClientForm from './ClientForm';
import { connect } from 'react-redux';
import { startAddClient } from '../actions/clients';

export class AddClientPage extends React.Component {
  onSubmit = client => {
    this.props.startAddClient(client);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="addClientPage">
        <div className="addClientPage__heading">
          <div className="addClientPage__content">
            <h1> Add New Client </h1>
          </div>
        </div>

        <ClientForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddClient: client => dispatch(startAddClient(client))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddClientPage);
