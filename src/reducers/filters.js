import moment from 'moment';

// default value for filters reducer
const filtersReducerDefaultState = {
  name: '',
  phoneNumber: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  createdAt: undefined,
  lastEdited: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, name: action.name };
    case 'SET_PHONE_FILTER':
      return { ...state, phoneNumber: action.phone };
    case 'SORT_BY_ALPHABET':
      return { ...state, sortBy: 'alphabetically' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.date };
    case 'SET_END_DATE':
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

export default filtersReducer;
