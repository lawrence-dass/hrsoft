// action generator for filters

export const setInputFilter = (input = '') => {
  return {
    type: 'SET_INPUT_FILTER',
    input,
  };
};

export const sortByAlphabet = () => {
  return {
    type: 'SORT_BY_ALPHABET',
  };
};

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

export const sortByLastCommunication = () => ({
  type: 'SORT_BY_LASTCOMMUNICATION',
});

export const sortByPriority = () => ({
  type: 'SORT_BY_PRIORITY',
});

export const sortByMemberType = () => ({
  type: 'SORT_BY_MEMBERTYPE',
});

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});
