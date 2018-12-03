import moment from 'moment';

const filters = {
  name: '',
  phoneNumber: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  createdAt: undefined,
  lastEdited: undefined
};

const altFilters = {
  name: 'jo',
  phoneNumber: '',
  sortBy: 'alphabetically',
  startDate: moment(0),
  endDate: moment().add(3, 'days'),
  createdAt: undefined,
  lastEdited: undefined
};

export { filters, altFilters };
