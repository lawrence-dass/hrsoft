import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/sytles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

import { addClient } from './actions/clients';
// import { setNameFilter } from './actions/filters';
import getVisibleClients from './selectors/clients';

import 'react-dates/lib/css/_datepicker.css';
import 'react-phone-number-input/style.css';
import './firebase/firebase';

// import getVisibleClients from './selectors/clients';

const store = configureStore();

// const clientOne = store.dispatch(
//   addClient({
//     firstName: 'John',
//     lastName: 'Smith',
//     note: 'first special note',
//     email: 'jdoe@hotmail.com',
//     createdAt: -21000
//   })
// );

// const clientThree = store.dispatch(
//   addClient({
//     firstName: 'Jane',
//     lastName: 'Smith',
//     note: 'Third special note',
//     email: 'Jane@tarzan.com',
//     gender: 'F',
//     address: 'Same address here',
//     createdAt: 1000
//   })
// );

// const clientTwo = store.dispatch(
//   addClient({
//     firstName: 'Philip',
//     lastName: 'Smith',
//     note: 'Second special note',
//     email: 'P@lip.com',
//     gender: 'M',
//     address: 'Some address here',
//     createdAt: -1000
//   })
// );

// console.log(store.getState());

// store.dispatch(setNameFilter('john'));

// setTimeout(() => {
//   store.dispatch(setNameFilter('phil'));
// }, 3000);

const state = store.getState();

const visibleClients = getVisibleClients(state.clients, state.filters);

// console.log(visibleClients);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// consider removing normalize css and adding customer css resets.
// integrate bundle-analyzer (npm)

// Learning
// // In parcelJS you dont need to config router setup for routing

// About us page, what the app is about, how to use and pro version.

// Read me

// consider keeping Title in the form

// place an icon for edit cleint

// couple of test are spending for clientListFilters
