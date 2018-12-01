import uuid from 'uuid';

// action generator for adding client
// passed with default value if no value passed for the client
export const addClient = ({
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
} = {}) => ({
  type: 'ADD_CLIENT',
  client: {
    id: uuid(),
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
  }
});

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
