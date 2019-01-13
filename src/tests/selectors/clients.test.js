// import moment from 'moment';
// import getVisibleClients from '../../selectors/clients';
// import clients from '../fixtures/clients';

// test('should filter by text/name value', () => {
//   const filters = {
//     name: 'peter',
//     phoneNumber: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined,
//     createdAt: undefined,
//     lastEdited: undefined
//   };
//   const result = getVisibleClients(clients, filters);
//   expect(result).toEqual([clients[2]]);
// });

// test('should filter by start date', () => {
//   const filters = {
//     name: '',
//     phoneNumber: '',
//     sortBy: 'date',
//     startDate: moment(0),
//     endDate: undefined,
//     createdAt: undefined,
//     lastEdited: undefined
//   };
//   const result = getVisibleClients(clients, filters);

//   expect(result).toEqual([clients[2], clients[0]]);
// });

// test('should filter by end date', () => {
//   const filters = {
//     name: '',
//     phoneNumber: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: moment(0).add(2, 'days'),
//     createdAt: undefined,
//     lastEdited: undefined
//   };
//   const result = getVisibleClients(clients, filters);

//   expect(result).toEqual([clients[0], clients[1]]);
// });

// test('should filter by date', () => {
//   const filters = {
//     name: '',
//     phoneNumber: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined,
//     createdAt: undefined,
//     lastEdited: undefined
//   };
//   const result = getVisibleClients(clients, filters);

//   expect(result).toEqual([clients[2], clients[0], clients[1]]);
// });

// test('should filter by end date', () => {
//   const filters = {
//     name: '',
//     phoneNumber: '',
//     sortBy: 'alphabetically',
//     startDate: undefined,
//     endDate: undefined,
//     createdAt: undefined,
//     lastEdited: undefined
//   };
//   const result = getVisibleClients(clients, filters);

//   expect(result).toEqual([clients[0], clients[1], clients[2]]);
// });
