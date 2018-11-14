// default values for the cient reducer
const clientReducerDefaultState = [];

const clientsReducer = (state = clientReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return [...state, action.client];
    case 'EDIT_CLIENT':
      return state.map(client => {
        if (client.id === action.id) {
          return {
            ...client,
            ...action.updates
          };
        } else {
          return client;
        }
      });
    case 'REMOVE_CLIENT':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default clientsReducer;
