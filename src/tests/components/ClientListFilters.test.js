import React from 'react';
import { shallow } from 'enzyme';
import { ClientListFilters } from '../../components/ClientListFilters';
import { filters, altFilters } from '../fixtures/filters.js';

let setNameFilter,
  sortByDate,
  sortByAlphabet,
  setStartDate,
  setEndDate,
  wrapper;

beforeEach(() => {
  setNameFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAlphabet = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ClientListFilters
      filters={filters}
      setNameFilter={setNameFilter}
      sortByDate={sortByDate}
      sortByAlphabet={sortByAlphabet}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ClientListFilter correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ClientListFilter with altFilter correctly', () => {
  wrapper.setProps({ fitlers: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'Joy';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setNameFilter).toHaveBeenLastCalledWith(value);
});

// test('should sort by date', () => {
//   const value = 'date';
//   // wrapper.setProps({ fitlers: altFilters });
//   wrapper.find('select').simulate('change', { target: { value } });
//   expect(sortByDate).toHaveBeenCalled();
// });

// test('should sort by alphabetically', () => {
//   const value = 'date';
//   // wrapper.setProps({ fitlers: altFilters });
//   wrapper.find('select').simulate('change', { target: { value } });
//   expect(sortByDate).toHaveBeenCalled();
// });
