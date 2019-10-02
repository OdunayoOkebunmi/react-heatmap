/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { Component } from 'react';
import moment from 'moment';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTransactions } from '@Actions/transactions';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const { getTransactions: getAllData } = this.props;
      const data = await getAllData();
      this.setState({ data });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  render() {
    const { data } = this.state;
    const dates = data.map(items => moment(items.date)._d);
    const maximumDate = new Date(Math.max.apply(null, dates));
    const minimumDate = new Date(Math.min.apply(null, dates));
    return (
      <main>
        <div>
          <h3>
            Transaction details
          </h3>
          <CalendarHeatMap
            startDate={minimumDate}
            endDate={maximumDate}
            values={data}
            showWeekdayLabels
            weekdayLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']}
          />
        </div>
      </main>
    );
  }
}

MainContent.propTypes = {
  getTransactions: PropTypes.func.isRequired,
};
export default connect(
  null,
  { getTransactions },
)(MainContent);
