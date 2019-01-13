import React from 'react';
import { shallow } from 'enzyme';
import { ClientListFilters } from '../../components/ClientListFilters';
import { filters, altFilters } from '../fixtures/filters.js';

let setInputFilter,
  sortByDate,
  sortByAlphabet,
  setStartDate,
  setEndDate,
  wrapper;

beforeEach(() => {
  setInputFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAlphabet = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ClientListFilters
      filters={filters}
      setInputFilter={setInputFilter}
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
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'Joy';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setInputFilter).toHaveBeenLastCalledWith(value);
});
