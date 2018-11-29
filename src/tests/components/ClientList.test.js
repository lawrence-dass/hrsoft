import React from 'react';
import { shallow } from 'enzyme';
import { ClientList } from '../../components/ClientList';
import clients from '../fixtures/clients';
import { wrap } from 'module';

test('should render ClientList with client details', () => {
  const wrapper = shallow(<ClientList clients={clients} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ClientList with empty message', () => {
  const wrapper = shallow(<ClientList clients={[]} />);
  expect(wrapper).toMatchSnapshot();
});
