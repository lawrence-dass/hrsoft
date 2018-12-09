import React from 'react';
import { shallow } from 'enzyme';
import { ClientSummary } from '../../components/ClientSummary';

test('should render client summary correctly with one client', () => {
  const wrapper = shallow(<ClientSummary clientCount={1} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render client summary correctly with multiple clients', () => {
  const wrapper = shallow(<ClientSummary clientCount={10} />);
  expect(wrapper).toMatchSnapshot();
});
