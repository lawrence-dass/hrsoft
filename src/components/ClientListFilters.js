import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import {
  setNameFilter,
  sortByDate,
  sortByAlphabet,
  setStartDate,
  setEndDate
} from '../actions/filters';

// Component which help to render the for sorting and filtering clients

class ClientListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarFocused: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.name}
          onChange={e => {
            this.props.dispatch(setNameFilter(e.target.value));
          }}
        />

        {/* Drop down option for sortby, based on value of the option an actionis dispatch to the store using terneray operator */}
        <select
          onChange={e => {
            e.target.value === 'Date'
              ? this.props.dispatch(sortByDate())
              : this.props.dispatch(sortByAlphabet());
          }}
        >
          <option value={this.props.filters.date}> Date </option>
          <option value={this.props.filters.alphabetically}>
            Alphabetically
          </option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId="startDate"
          endDateId="endDate"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

// linked the value attribute of input to the name filter from state

export default connect(mapStateToProps)(ClientListFilters);

// <DateRangePicker

// />
