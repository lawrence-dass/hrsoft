import React from 'react';
import { shallow } from 'enzyme';
import { AddClientPage } from '../../components/AddClientPage';
import clients from '../fixtures/clients';

let startAddClient, history, wrapper;

beforeEach(() => {
  startAddClient = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <startAddClientPage startAddClient={startAddClient} history={history} />
  );
});

test('should render startAddClientPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('should handle on submit', () => {
//   wrapper.find('ClientForm').props('onSubmit')(clients[0]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(startAddClient).toHaveBeenLastCalledWith(clients[0]);
// });
