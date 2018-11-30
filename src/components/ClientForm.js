import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';

import moment from 'moment';

class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.client ? props.client.firstName : '',
      lastName: props.client ? props.client.lastName : '',
      title: props.client ? props.client.title : '',
      gender: props.client ? props.client.gender : '',
      phone: props.client ? props.client.phone : '',
      email: props.client ? props.client.email : '',
      address: props.client ? props.client.address : '',
      status: props.client ? props.client.status : '',
      field: props.client ? props.client.field : '',
      note: props.client ? props.client.note : '',
      lastCommuniation: props.client ? props.client.lastCommuniation : '',
      memberType: props.client ? props.client.memberType : '',
      createdAt: props.client ? moment(props.client.createdAt) : moment(),
      error: ''
    };
  }

  onFirstNameChange = e => {
    const firstName = e.target.value;
    this.setState(() => {
      return { firstName };
    });
  };

  onLastNameChange = e => {
    const lastName = e.target.value;
    this.setState(() => {
      return { lastName };
    });
  };

  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => {
      return { email };
    });
  };

  onPhoneChange = e => {
    const phone = e.target.value;

    if (phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
      this.setState(() => {
        return { phone };
      });
    }
  };

  onGenderChange = e => {
    const gender = e.target.value;
    this.setState(() => {
      return { gender };
    });
  };

  onAddressChange = e => {
    const address = e.target.value;
    this.setState(() => {
      return { address };
    });
  };

  onFieldChange = e => {
    const field = e.target.value;
    this.setState(() => {
      return { field };
    });
  };

  onMemberTypeChange = e => {
    const memberType = e.target.value;
    this.setState(() => {
      return { memberType };
    });
  };

  onStatusChange = e => {
    const status = e.target.value;
    this.setState(() => {
      return { status };
    });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => {
      return { note };
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.phone ||
      !this.state.email ||
      !this.state.gender ||
      !this.state.address ||
      !this.state.status
    ) {
      this.setState(() => {
        return {
          error:
            'Please complete the form before submitting, most the fields are required.'
        };
      });
    } else {
      this.setState(() => {
        return {
          error: ''
        };
      });
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        title: this.state.title,
        gender: this.state.gender,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        status: this.state.status,
        field: this.state.field,
        note: this.state.note,
        lastCommuniation: this.state.lastCommuniation,
        memberType: this.state.memberType,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <h2> {this.state.error}</h2>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
            autoFocus
          />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />
          <input
            type="email"
            placeholder="Email here"
            value={this.state.email}
            onChange={this.onEmailChange}
          />

          <PhoneInput
            placeholder="Enter phone number"
            value={this.state.phone}
            onChange={phone => this.setState({ phone })}
          />

          <select name="gender" id="" onChange={this.onGenderChange}>
            <option value="male"> M </option>
            <option value="female"> F </option>
            <option value="na"> N/A </option>
          </select>
          <textarea
            name="address"
            id=""
            cols="30"
            rows="10"
            placeholder="Address here"
            value={this.state.address}
            onChange={this.onAddressChange}
          />
          <input
            type="text"
            value={this.state.field}
            placeholder="Field Here"
            onChange={this.onFieldChange}
          />
          <select name="memberType" id="" onChange={this.onMemberTypeChange}>
            <option value="basic"> Basic </option>
            <option value="gold"> Gold </option>
          </select>
          <select name="status" id="" onChange={this.onStatusChange}>
            <option value="veryhigh"> High Priorty </option>
            <option value="medium"> Unemployed </option>
            <option value="high"> Employed, Planning to Switch </option>
            <option value="low"> Unemployed, not interested </option>
            <option value="verylow"> Employed, not interested </option>
          </select>
          <textarea
            name="note"
            id=""
            cols="30"
            rows="10"
            placeholder="Client Notes (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button> Add Client</button>
        </form>
      </div>
    );
  }
}

export default ClientForm;
