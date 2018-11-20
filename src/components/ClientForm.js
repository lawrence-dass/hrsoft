import React, { Component } from 'react';

class ClientForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="First Name" autofocus />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email here" />
          <input type="number" placeholder="Phone Number Here" />
          <textarea
            name="adress"
            id=""
            cols="30"
            rows="10"
            placeholder="placeholder"
          />
          <textarea
            name="note"
            id=""
            cols="30"
            rows="10"
            placeholder="Client Notes"
          />
        </form>
      </div>
    );
  }
}

export default ClientForm;
