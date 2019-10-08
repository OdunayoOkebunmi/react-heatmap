/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { Component } from 'react';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTransactions } from '@Actions/transactions';
import { getAccumulatedTransaction, getMinimumAndMaximumDate } from '../helpers/helper';
import './style.css';

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
    const transactions = getAccumulatedTransaction(data);
    const { maximumDate } = getMinimumAndMaximumDate(data);
    const { minimumDate } = getMinimumAndMaximumDate(data);
    return (
      <main>
        <div>
          <h3>
            Transaction details
          </h3>
          <CalendarHeatMap
            startDate={minimumDate}
            endDate={maximumDate}
            values={transactions}
            showWeekdayLabels
            weekdayLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              if (value.profit < 300) return 'color-scale-1';
              if (value.profit < 250) return 'color-scale-2';
              if (value.profit < 0) return 'color-scale-3';
              if (value.profit > 200) return 'color-scale-4';
              if (value.profit > 300) return 'color-scale-5';
              if (value.profit === 0) return 'color-scale-6';
            }}
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
