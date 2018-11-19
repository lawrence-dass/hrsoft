import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, sortByDate, sortByAlphabet } from '../actions/filters';

// Component which help to render the for sorting and filtering clients
const ClientListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.name}
      onChange={e => {
        props.dispatch(setNameFilter(e.target.value));
      }}
    />

    {/* Drop down option for sortby, based on value of the option an actionis dispatch to the store using terneray operator */}
    <select
      onChange={e => {
        e.target.value === 'Date'
          ? props.dispatch(sortByDate())
          : props.dispatch(sortByAlphabet());
      }}
    >
      <option value={props.filters.date}> Date </option>
      <option value={props.filters.alphabetically}> Alphabetically </option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

// linked the value attribute of input to the name filter from state

export default connect(mapStateToProps)(ClientListFilters);
