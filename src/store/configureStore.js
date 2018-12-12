import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import clientsReducer from '../reducers/clients';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
  // store creation with combined reducers
  const store = createStore(
    combineReducers({
      clients: clientsReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
