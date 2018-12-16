import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddClient,
  addClient,
  editClient,
  removeClient,
  setClients,
  startSetClients,
  startRemoveClient
} from '../../actions/clients';
import clients from '../fixtures/clients';
import database from '../../firebase/firebase';
import { strict } from 'assert';

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const clientData = {};
  clients.forEach(
    ({
      id,
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
    }) => {
      clientData[id] = {
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
    }
  );
  database
    .ref('clients')
    .set(clientData)
    .then(() => {
      done();
    });
});

test('should setup remove client action object', () => {
  const removeAction = removeClient({ id: '123abc' });
  expect(removeAction).toEqual({ type: 'REMOVE_CLIENT', id: '123abc' });
});

test('should remove client from firebase', done => {
  const store = createMockStore({});
  const id = clients[2].id;
  store
    .dispatch(startRemoveClient({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_CLIENT',
        id
      });
      return database.ref(`clients/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
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
  const addAction = addClient(clients[2]);
  expect(addAction).toEqual({
    type: 'ADD_CLIENT',
    client: clients[2]
  });
});

test('should add client to the database and store', done => {
  const store = createMockStore({});
  const clientData = {
    title: 'Mrs',
    firstName: 'Jay',
    lastName: 'Silva',
    gender: 'M',
    phone: '123456789',
    email: 'E2r@ttt.com',
    address: '12345 street',
    status: 'Employed',
    field: 'Athlete',
    note: 'Something...',
    lastCommuniation: '',
    memberType: 'Gol',
    createdAt: 1000
  };
  store.dispatch(startAddClient(clientData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_CLIENT',
      client: {
        id: expect.any(String),
        ...clientData
      }
    });

    database
      .ref(`clients/${actions[0].client.id}`)
      .once('value')
      .then(snapshot => {
        expect(snapshot.val()).toEqual(clientData);
        done();
      });
  });
});

console.log('below needs a fix.');
// test('should add client with default to the database and store', () => {
//   const store = createMockStore({});
//   const clientDefaults = {
//     title: '',
//     firstName: '',
//     lastName: '',
//     gender: '',
//     phone: '',
//     email: '',
//     address: '',
//     status: '',
//     field: '',
//     note: '',
//     lastCommuniation: '',
//     memberType: '',
//     createdAt: 0
//   };
//   store
//     .dispatch(startAddClient({}))
//     .then(() => {
//       const actions = store.getActions();
//       expect(actions[0]).toEqual({
//         type: 'ADD_CLIENT',
//         client: {
//           id: expect.any(String),
//           ...clientDefaults
//         }
//       });

//       return database.ref(`clients/${actions[0].client.id}`).once('value');
//     })
//     .then(snapshot => {
//       console.log(snapshot.val());
//       expect(snapshot.val()).toEqual(clientDefaults);
//       done();
//     });
// });

test('should setup set clients action object with data ', () => {
  const action = setClients(clients);
  expect(action).toEqual({
    type: 'SET_CLIENTS',
    clients
  });
});

test('should fetch clients from firebase', done => {
  const store = createMockStore({});
  store.dispatch(startSetClients()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_CLIENTS',
      clients
    });
    done();
  });
});
