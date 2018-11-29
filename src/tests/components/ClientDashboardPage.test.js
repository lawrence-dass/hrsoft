import React from 'react';
import { shallow } from 'enzyme';
import ClientDashboardPage from '../../components/ClientDashboardPage';

test('should render ClientDashboardPage', () => {
  const wrapper = shallow(<ClientDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
