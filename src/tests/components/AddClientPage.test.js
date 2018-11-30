import React from 'react';
import { shallow } from 'enzyme';
import { AddClientPage } from '../../components/AddClientPage';
import clients from '../fixtures/clients';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddClientPage onSubmit={onSubmit} history={history} />);
});

test('should render AddClientPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find('ClientForm').prop('onSubmit')(clients[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(clients[0]);
});
