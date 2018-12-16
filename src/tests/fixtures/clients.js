import moment from 'moment';

const clients = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
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

export default clients;
