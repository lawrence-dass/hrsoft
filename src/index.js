import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/sytles.scss';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import { startSetClients } from './actions/clients';

import 'react-dates/lib/css/_datepicker.css';
import 'react-phone-number-input/style.css';
import './firebase/firebase';
import { firebase } from './firebase/firebase';

// import getVisibleClients from './selectors/clients';

const store = configureStore();
console.log(store);

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

// const state = store.getState();

// const visibleClients = getVisibleClients(state.clients, state.filters);

// console.log(visibleClients);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p> Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Logged in');
    store.dispatch(login(user.uid));
    store.dispatch(startSetClients()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// consider removing normalize css and adding customer css resets.
// integrate bundle-analyzer (npm)

// Learning
// // In parcelJS you dont need to config router setup for routing

// About us page, what the app is about, how to use and pro version.

// Read me

// consider keeping Title in the form

// place an icon for edit cleint

// couple of test are spending for clientListFilters

// remove all console.logs

// refactor all functional component and remove return keyword.

// set up github login as well and consider authentication with email and password
