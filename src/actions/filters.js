// action generator for filters

export const setNameFilter = (name = '') => ({
  type: 'SET_TEXT_FILTER',
  name
});

export const setPhoneFilter = (phoneNumber = '') => ({
  type: 'SET_PHONE_FILTER',
  phoneNumber
});

export const sortByAlphabet = () => ({
  type: 'SORT_BY_ALPHABET'
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});
