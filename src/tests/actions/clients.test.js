import { addClient, editClient, removeClient } from '../../actions/clients';

test('should setup remove client action object', () => {
  const removeAction = removeClient({ id: '123abc' });
  expect(removeAction).toEqual({ type: 'REMOVE_CLIENT', id: '123abc' });
});

test('should setup edit client action object with given update', () => {
  const editAction = editClient('123abc', { lastName: 'Cramer' });
  expect(editAction).toEqual({
    type: 'EDIT_CLIENT',
    id: '123abc',
    updates: { lastName: 'Cramer' }
  });
});

test('should setup add Client action object with given values', () => {
  const clientData = {
    title: 'Mrs',
    firstName: 'Kobe',
    lastName: 'Bryant',
    gender: 'M',
    phone: '123456789',
    email: 'kobe@kobe.com',
    address: '123 Work Ethic Street',
    status: 'Rocking',
    field: 'Basket ball and Hustle',
    note: 'Inspiration',
    lastCommuniation: '',
    memberType: 'Gold',
    createdAt: 0
  };
  const addAction = addClient(clientData);
  expect(addAction).toEqual({
    type: 'ADD_CLIENT',
    client: { ...clientData, id: expect.any(String) }
  });
});

test('should setup add Client action object with default value', () => {
  const defaultClientData = {
    title: '',
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    status: '',
    field: '',
    note: '',
    lastCommuniation: '',
    memberType: '',
    createdAt: 0
  };
  const addAction = addClient();
  expect(addAction).toEqual({
    type: 'ADD_CLIENT',
    client: { ...defaultClientData, id: expect.any(String) }
  });
});
