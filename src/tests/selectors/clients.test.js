import moment from 'moment';
import getVisibleClients from '../../selectors/clients';

const clients = [
  {
    id: 1,
    title: 'Mr',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'M',
    phone: '987654321',
    email: 'John@doe.com',
    address: 'FakeOne High Street',
    status: 'Employed',
    field: 'Designer',
    note: 'Note1',
    lastCommuniation: '',
    memberType: 'Gold',
    createdAt: 0
  },
  {
    id: 2,
    title: 'Mrs',
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'F',
    phone: '123456789',
    email: 'Jane@doe.com',
    address: 'FakeOne High Street',
    status: 'Housewife',
    field: 'n/a',
    note: 'Not needed',
    lastCommuniation: '',
    memberType: 'Silver',
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: 3,
    title: 'Mr',
    firstName: 'Peter',
    lastName: 'Doe',
    gender: 'M',
    phone: '9999999999',
    email: 'Peter@doe.com',
    address: 'FakeTwo High Street',
    status: 'Student',
    field: 'Teacher',
    note: 'Note3',
    lastCommuniation: '',
    memberType: 'Gold',
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];

test('should filter by text/name value', () => {
  const filters = {
    name: 'peter',
    phoneNumber: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    createdAt: undefined,
    lastEdited: undefined
  };
  const result = getVisibleClients(clients, filters);
  expect(result).toEqual([clients[2]]);
});

test('should filter by start date', () => {
  const filters = {
    name: '',
    phoneNumber: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
    createdAt: undefined,
    lastEdited: undefined
  };
  const result = getVisibleClients(clients, filters);

  expect(result).toEqual([clients[2], clients[0]]);
});

test('should filter by end date', () => {
  const filters = {
    name: '',
    phoneNumber: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
    createdAt: undefined,
    lastEdited: undefined
  };
  const result = getVisibleClients(clients, filters);

  expect(result).toEqual([clients[0], clients[1]]);
});

test('should filter by date', () => {
  const filters = {
    name: '',
    phoneNumber: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    createdAt: undefined,
    lastEdited: undefined
  };
  const result = getVisibleClients(clients, filters);

  expect(result).toEqual([clients[2], clients[0], clients[1]]);
});

test('should filter by end date', () => {
  const filters = {
    name: '',
    phoneNumber: '',
    sortBy: 'alphabetically',
    startDate: undefined,
    endDate: undefined,
    createdAt: undefined,
    lastEdited: undefined
  };
  const result = getVisibleClients(clients, filters);

  expect(result).toEqual([clients[0], clients[1], clients[2]]);
});
