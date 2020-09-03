import React from 'react';
import { shallow } from 'enzyme';
import ClientForm from '../../components/ClientForm';
import clients from '../fixtures/clients';

test('should render ClientForm', () => {
  const wrapper = shallow(<ClientForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ClientForm with data', () => {
  const wrapper = shallow(<ClientForm client={clients[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ClientForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should change the client's on input change for firstName", () => {
  const value = 'Kobe';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('input').at(0).simulate('change', { target: { value } });

  expect(wrapper.state('firstName')).toBe('Kobe');
});

test("should change the client's on input change for lastName", () => {
  const value = 'Bryant';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value } });

  expect(wrapper.state('lastName')).toBe('Bryant');
});

test("should change the client's on input change for email", () => {
  const value = 'Kobe@workEthics.com';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('input').at(2).simulate('change', { target: { value } });

  expect(wrapper.state('email')).toBe('Kobe@workEthics.com');
});

// test("should change the client's on input change for phone number", () => {
//   const value = 10000000000;
//   const wrapper = shallow(<ClientForm />);
//   wrapper
//     .find('PhoneInput')
//     .at(0)
//     .simulate('change', { target: { value } });

//   // expect(wrapper.state('phoneNumber')).toBe(100000000000);
// });

test("should change the client's gender input on selection", () => {
  const value = 'F';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('select').at(0).simulate('change', { target: { value } });

  expect(wrapper.state('gender')).toBe('F');
});

test('should change the client address textarea input for address', () => {
  const value = '123 John Kennedy Street, 12345';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('textarea').at(0).simulate('change', { target: { value } });

  expect(wrapper.state('address')).toBe('123 John Kennedy Street, 12345');
});

test("should change the client's field input for field", () => {
  const value = 'Basket Ball Player';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('input').at(3).simulate('change', { target: { value } });

  expect(wrapper.state('field')).toBe('Basket Ball Player');
});

test("should change the client's gender input on selection", () => {
  const value = 'F';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('select').at(0).simulate('change', { target: { value } });

  expect(wrapper.state('gender')).toBe('F');
});

test("should change the client's member type input on selection", () => {
  const value = 'Gold';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('select').at(1).simulate('change', { target: { value } });

  expect(wrapper.state('memberType')).toBe('Gold');
});

test("should change the client's status input on selection", () => {
  const value = 'Employed';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('select').at(2).simulate('change', { target: { value } });

  expect(wrapper.state('status')).toBe('Employed');
});

test('should change the client notes textarea input for note', () => {
  const value = 'Some super awesome note';
  const wrapper = shallow(<ClientForm />);
  wrapper.find('textarea').at(1).simulate('change', { target: { value } });

  expect(wrapper.state('note')).toBe('Some super awesome note');
});

test('should call onSubmit prop with valid from submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ClientForm client={clients[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: clients[0].title,
    firstName: clients[0].firstName,
    lastName: clients[0].lastName,
    gender: clients[0].gender,
    phone: clients[0].phone,
    email: clients[0].email,
    address: clients[0].address,
    status: clients[0].status,
    field: clients[0].field,
    note: clients[0].note,
    lastCommuniation: clients[0].lastCommuniation,
    memberType: clients[0].memberType,
    createdAt: clients[0].createdAt,
  });
});
