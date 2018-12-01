import React from 'react';
import { shallow } from 'enzyme';
import { AddClientPage } from '../../components/AddClientPage';
import clients from '../fixtures/clients';

let addClient, history, wrapper;

beforeEach(() => {
  addClient = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddClientPage addClient={addClient} history={history} />);
});

test('should render AddClientPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
  wrapper.find('ClientForm').prop('onSubmit')(clients[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addClient).toHaveBeenLastCalledWith(clients[0]);
});
