import uuid from 'uuid';
import database from '../firebase/firebase';
// action generator for adding client
// passed with default value if no value passed for the client
export const addClient = client => ({
  type: 'ADD_CLIENT',
  client
});

export const startAddClient = (clientData = {}) => {
  return dispatch => {
    const {
      title = '',
      firstName = '',
      lastName = '',
      gender = '',
      phone = '',
      email = '',
      address = '',
      status = '',
      field = '',
      note = '',
      lastCommuniation = '',
      memberType = '',
      createdAt = 0
    } = clientData;

    const client = {
      title,
      firstName,
      lastName,
      gender,
      phone,
      email,
      address,
      status,
      field,
      note,
      lastCommuniation,
      memberType,
      createdAt
    };

    return database
      .ref('clients')
      .push(client)
      .then(ref => {
        dispatch(
          addClient({
            id: ref.key,
            ...client
          })
        );
      });
  };
};

// action generating for removing client
export const removeClient = ({ id } = {}) => {
  return {
    type: 'REMOVE_CLIENT',
    id
  };
};

// action generating for modifying the client details
export const editClient = (id, updates) => {
  return {
    type: 'EDIT_CLIENT',
    id,
    updates
  };
};
