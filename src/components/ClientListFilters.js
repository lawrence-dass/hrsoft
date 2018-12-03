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

export class ClientListFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarFocused: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = e => {
    this.props.setNameFilter(e.target.value);
  };

  onSortChange = e => {
    e.target.value === 'Date'
      ? this.props.sortByDate()
      : this.props.sortByAlphabet();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.name}
          onChange={this.onTextChange}
        />

        {/* Drop down option for sortby, based on value of the option an action is dispatch to the store using terneray operator */}
        <select onChange={this.onSortChange}>
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

const mapDispatchToProps = dispatch => ({
  setNameFilter: text => dispatch(setNameFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAlphabet: () => dispatch(sortByAlphabet()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientListFilters);
