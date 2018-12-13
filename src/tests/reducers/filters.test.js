import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter at intialization', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    name: '',
    phoneNumber: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    createdAt: undefined,
    lastEdited: undefined
  });
});

test('should setup set name filter with the given input', () => {
  const currentState = {
    name: 'Peter',
    phoneNumber: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  };
  const action = {
    type: 'SET_TEXT_FILTER',
    name: 'John'
  };

  const state = filterReducer(currentState, action);

  expect(state).toEqual({
    name: 'John',
    phoneNumber: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  });
});

test('should setup set phone filter with the given input', () => {
  const currentState = {
    name: '',
    phoneNumber: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  };
  const action = {
    type: 'SET_PHONE_FILTER',
    phoneNumber: 123456789
  };

  const state = filterReducer(currentState, action);

  expect(state).toEqual({
    name: '',
    phoneNumber: 123456789,
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  });
});

test('should setup the sort by filter to alphabetically', () => {
  const currentState = {
    name: '',
    phoneNumber: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  };
  const action = {
    type: 'SORT_BY_ALPHABET'
  };

  const state = filterReducer(currentState, action);

  expect(state).toEqual({
    name: '',
    phoneNumber: '',
    sortBy: 'alphabetically',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  });
});

test('should setup the sort by filter by date', () => {
  const currentState = {
    name: '',
    phoneNumber: '',
    sortBy: 'alphabetically',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  };
  const action = {
    type: 'SORT_BY_DATE'
  };

  const state = filterReducer(currentState, action);

  expect(state).toEqual({
    name: '',
    phoneNumber: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    createdAt: undefined,
    lastEdited: undefined
  });
});

test('should setup the filter for set start date', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };
  const state = filterReducer(undefined, action);

  expect(state.startDate).toEqual(startDate);
});

test('should setup the filter for set end date', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };
  const state = filterReducer(undefined, action);

  expect(state.endDate).toEqual(endDate);
});
