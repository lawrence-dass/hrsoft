import React from 'react';
import { shallow } from 'enzyme';
import { EditClientPage } from '../../components/EditClientPage';
import clients from '../fixtures/clients';

let startEditClient, history, wrapper;

beforeEach(() => {
  startEditClient = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditClientPage
      startEditClient={startEditClient}
      history={history}
      client={clients[1]}
    />
  );
});

test('should render EditClientPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render EditClientPage', () => {
  wrapper.find('ClientForm').prop('onSubmit')(clients[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditClient).toHaveBeenLastCalledWith(clients[1].id, clients[1]);
});
