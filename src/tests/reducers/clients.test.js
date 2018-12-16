import clientReducer from '../../reducers/clients';
import clients from '../fixtures/clients';

test('should set client value to default at initialization', () => {
  const state = clientReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add a new client with given data', () => {
  const action = {
    type: 'ADD_CLIENT',
    client: {
      id: 4,
      title: 'Mr',
      firstName: 'Harry',
      lastName: 'Doe',
      gender: 'N/A',
      phone: '8888888888',
      email: '3H@d.com',
      address: 'FakeOne/3 High Street',
      status: 'Employed',
      field: 'Dentist',
      note: 'Happy',
      lastCommuniation: '',
      memberType: 'Silver',
      createdAt: 0
    }
  };
  const state = clientReducer(clients, action);
  expect(state).toEqual([...clients, action.client]);
});

test('should remove the client with the given id', () => {
  const state = clientReducer(clients, {
    type: 'REMOVE_CLIENT',
    id: clients[0].id
  });
  expect(state).toEqual([clients[1], clients[2]]);
});

test('should not remove the client with invalid id', () => {
  const state = clientReducer(clients, {
    type: 'REMOVE_CLIENT',
    id: '-1'
  });
  expect(state).toEqual(clients);
});

test('should edit the client details with new details', () => {
  const state = clientReducer(clients, {
    type: 'EDIT_CLIENT',
    id: clients[0].id,
    updates: { firstName: 'Johnie' }
  });
  expect(state[0].firstName).toEqual('Johnie');
});

test('should not edit the client details with invalid id', () => {
  const state = clientReducer(clients, {
    type: 'EDIT_CLIENT',
    id: 10,
    updates: { firstName: 'Johnie' }
  });
  expect(state[0].firstName).toEqual('John');
});

test('should set clients', () => {
  const action = {
    type: 'SET_CLIENTS',
    clients: [clients[1]]
  };

  const state = clientReducer(clients, action);
  expect(state).toEqual([clients[1]]);
});
