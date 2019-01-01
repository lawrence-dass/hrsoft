import moment from 'moment';

// default value for filters reducer
const filtersReducerDefaultState = {
  input: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
  createdAt: undefined,
  lastEdited: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_INPUT_FILTER':
      // console.log(action.input);
      return { ...state, input: action.input };
    case 'SORT_BY_ALPHABET':
      console.log('SORT_BY_ALPHABET case');
      return { ...state, sortBy: 'alphabetically' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_LASTCOMMUNICATION':
      return { ...state, sortBy: 'lastCommunication' };
    case 'SORT_BY_PRIORITY':
      return { ...state, sortBy: 'priority' };
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
