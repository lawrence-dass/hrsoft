import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import { Link } from 'react-router-dom';
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
      priority: props.client ? props.client.priority : '',
      field: props.client ? props.client.field : '',
      note: props.client ? props.client.note : '',
      lastCommunication: props.client
        ? moment(props.client.lastCommunication)
        : moment(),
      memberType: props.client ? props.client.memberType : 'basic',
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
    console.log('onGenderChange triggered');
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
    console.log(memberType);
    this.setState(() => {
      return { memberType };
    });
  };

  onPriorityChange = e => {
    console.log(e.target.value);
    const priority = e.target.value;
    this.setState(() => {
      return { priority };
    });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => {
      return { note };
    });
  };

  onLastCommunicatedDate = lastCommunication => {
    console.log(lastCommunication);
    if (lastCommunication) {
      this.setState(() => {
        return {
          lastCommunication
        };
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocused: focused
      };
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
      !this.state.priority
    ) {
      this.setState(() => {
        return {
          error: `Please complete the form before submitting. Following are required:
          ${!this.state.firstName ? 'First Name' : ''}
          ${!this.state.lastName ? 'Last Name' : ''}
          ${!this.state.email ? 'Email Address' : ''}
          ${!this.state.phone ? 'Phone' : ''}
          ${!this.state.gender ? 'Gender' : ''}
          ${!this.state.address ? 'Address' : ''}
          ${!this.state.priority ? 'Priority' : ''}`
        };
      });
    } else {
      this.setState(() => {
        return { error: '' };
      });
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        title: this.state.title,
        gender: this.state.gender,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        priority: this.state.priority,
        field: this.state.field,
        note: this.state.note,
        lastCommunication: this.state.lastCommunication.valueOf(),
        memberType: this.state.memberType,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <h3> {this.state.error}</h3>}
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
          <label htmlFor="name"> Gender</label>
          <div onChange={this.onGenderChange}>
            <input type="radio" value="M" name="gender" /> M
            <input type="radio" value="F" name="gender" /> F
            <input type="radio" value="N/A" name="gender" /> Other
          </div>
          <textarea
            name="address"
            id=""
            cols="30"
            rows="10"
            placeholder="Address here"
            value={this.state.address}
            onChange={this.onAddressChange}
          />
          <label htmlFor="field"> Profession/Field: </label>
          <input
            name="field"
            type="text"
            value={this.state.field}
            placeholder="Field Here"
            onChange={this.onFieldChange}
          />
          <select name="memberType" id="" onChange={this.onMemberTypeChange}>
            <option value="basic"> Basic </option>
            <option value="gold"> Gold </option>
          </select>
          <select name="priority" id="" onChange={this.onPriorityChange}>
            <option defaultValue="N/A" />
            <option value="5"> High Priorty </option>
            <option value="4"> Unemployed </option>
            <option value="3"> Employed, Planning to Switch </option>
            <option value="2"> Unemployed, not interested </option>
            <option value="1"> Employed, not interested </option>
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
          <SingleDatePicker
            date={this.state.lastCommunication}
            onDateChange={this.onLastCommunicatedDate}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            id="single_date_picker"
          />
          <button> {this.props.client ? 'Submit' : 'Add Client'}</button>
          <Link to="/dashboard">
            <button> Cancel </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default ClientForm;
