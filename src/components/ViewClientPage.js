import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export class ViewClientPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p> First Name: {this.props.client.firstName || 'N/A'} </p>
        <p> Last Name: {this.props.client.lastName || 'N/A'} </p>
        <p> Gender: {this.props.client.gender || 'N/A'} </p>
        <p> Phone: {this.props.client.phone || 'N/A'} </p>
        <p> Email: {this.props.client.email || 'N/A'} </p>
        <p> Address: {this.props.client.address || 'N/A'} </p>
        <p> Employment Status: {this.props.client.status || 'N/A'} </p>
        <p> Field: {this.props.client.field || 'N/A'} </p>
        <p> Note: {this.props.client.note || 'N/A'} </p>
        <p>Last Communication: {this.props.client.lastCommuniation || 'N/A'}</p>
        <p> Memmber Type: {this.props.client.memberType || 'N/A'} </p>
        <p>
          Record created on:
          {moment(this.props.client.createdAt).format('DD/MM/YYYY') || 'N/A'}
        </p>
      </div>
    );
  }
}

// (title = ''),
//   (firstName = ''),
//   (lastName = ''),
//   (gender = ''),
//   (phone = ''),
//   (email = ''),
//   (address = ''),
//   (status = ''),
//   (field = ''),
//   (note = ''),
//   (lastCommuniation = ''),
//   (memberType = ''),
//   (createdAt = 0);

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.find(client => client.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(ViewClientPage);
