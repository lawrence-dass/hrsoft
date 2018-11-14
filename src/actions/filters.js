// action generator for filters

export const setNameFilter = (name = '') => ({
  type: 'SET_TEXT_FILTER',
  name
});

export const setPhoneFilter = (phone = '') => ({
  type: 'SET_PHONE_FILTER',
  phone
});

export const sortByAlphabet = () => ({
  type: 'SORT_BY_ALPHABET'
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const setStartDate = date => ({
  type: 'SET_START_DATE',
  date
});

export const setEndDate = date => ({
  type: 'SET_END_DATE',
  date
});
