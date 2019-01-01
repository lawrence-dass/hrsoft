import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export class ViewClientPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="clientProfile">
        <div className="clientProfile__heading">
          <div className="clientProfile__content">
            <h1> Client's Profile </h1>
          </div>
        </div>
        <div className="clientProfile__list">
          <p>
            <span> First Name:</span>
            <span> {this.props.client.firstName || 'N/A'} </span>
          </p>
          <p>
            <span>Last Name:</span>
            <span>{this.props.client.lastName || 'N/A'} </span>
          </p>

          <p>
            <span> Gender: </span>
            <span> {this.props.client.gender || 'N/A'}</span>
          </p>
          <p>
            <span> Phone: </span>
            <span> {this.props.client.phone || 'N/A'} </span>
          </p>
          <p>
            <span>Email: </span>
            <span> {this.props.client.email || 'N/A'}</span>
          </p>
          <p>
            <span> Address: </span>
            <span> {this.props.client.address || 'N/A'} </span>
          </p>
          <p>
            <span> Employment Status:</span>
            <span> {this.props.client.status || 'N/A'} </span>
          </p>
          <p>
            <span> Field: </span>
            <span> {this.props.client.field || 'N/A'}</span>
          </p>
          <p>
            <span> Note:</span> <span> {this.props.client.note || 'N/A'} </span>
          </p>
          <p>
            <span> Last Communication: </span>
            <span> {this.props.client.lastCommuniation || 'N/A'} </span>
          </p>
          <p>
            <span> Member Type: </span>
            <span> {this.props.client.memberType || 'N/A'}</span>
          </p>
          <p>
            <span> Record created on: </span>
            <span>
              {moment(this.props.client.createdAt).format('DD/MM/YYYY') ||
                'N/A'}
            </span>
          </p>
        </div>
        <div className="clientProfile__buttons">
          <Link to="/dashboard">Edit</Link>
          <Link to="/dashboard">Go back</Link>
          <Link to="/dashboard">Delete</Link>
        </div>
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
