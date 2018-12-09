import React from 'react';
import ClientForm from './ClientForm';
import { connect } from 'react-redux';
import { editClient } from '../actions/clients';

export class ViewClientPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p> Hello </p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    client: state.clients.find(client => client.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(ViewClientPage);
