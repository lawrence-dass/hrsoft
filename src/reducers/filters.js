import moment from 'moment';

// default value for filters reducer
const filtersReducerDefaultState = {
  name: '',
  phoneNumber: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
  createdAt: undefined,
  lastEdited: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, name: action.name };
    case 'SET_PHONE_FILTER':
      return { ...state, phoneNumber: action.phoneNumber };
    case 'SORT_BY_ALPHABET':
      return { ...state, sortBy: 'alphabetically' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_LASTCOMMUNICATION':
      return { ...state, sortBy: 'lastCommunication' };
    case 'SORT_BY_MEMBERTYPE':
      return { ...state, sortBy: 'memberType' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default filtersReducer;
