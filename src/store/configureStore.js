import { createStore, combineReducers } from 'redux';
import clientsReducer from '../reducers/clients';
import filtersReducer from '../reducers/filters';

export default () => {
  // store creation with combined reducers
  const store = createStore(
    combineReducers({
      clients: clientsReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
