import { createStore, combineReducers } from 'redux';
import clientsReducer from '../reducers/clients';
import filtersReducer from '../reducers/filters';

export default () => {
  // store creation with combined reducers
  const store = createStore(
    combineReducers({
      clients: clientsReducer,
      filters: filtersReducer
    })
  );

  return store;
};
