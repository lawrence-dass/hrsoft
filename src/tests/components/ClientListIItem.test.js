import React from 'react';
import { shallow } from 'enzyme';
import { ClientListItem } from '../../components/ClientListItem';
import clients from '../fixtures/clients';

test('should render ClientListItem', () => {
  const wrapper = shallow(<ClientListItem {...clients[0]} />);
  expect(wrapper).toMatchSnapshot();
});
