import moment from 'moment';
import {
  setNameFilter,
  setPhoneFilter,
  sortByAlphabet,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should set the name filter with the given text argument', () => {
  const filter = setNameFilter('Kobe');
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    name: 'Kobe'
  });
});

test('should set the name filter with the default text, empty string', () => {
  const filter = setNameFilter();
  expect(filter).toEqual({
    type: 'SET_TEXT_FILTER',
    name: ''
  });
});

test('should set the name filter with the given number argument', () => {
  const filter = setPhoneFilter(123456789);
  expect(filter).toEqual({
    type: 'SET_PHONE_FILTER',
    phoneNumber: 123456789
  });
});

test('should set sort by filter to alphabet', () => {
  const filter = sortByAlphabet();
  expect(filter).toEqual({
    type: 'SORT_BY_ALPHABET'
  });
});

test('should set the sort by filter to date', () => {
  const filter = sortByDate();
  expect(filter).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should set the filter to setEndDate', () => {
  const filter = setEndDate(moment(0));
  expect(filter).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should set the filter to setStartDate', () => {
  const filter = setStartDate(moment(0));
  expect(filter).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});
