/* eslint-disable no-unused-vars */
import React from 'react';
import HeatmapCalendar from 'heatmap-calendar-react';
import 'heatmap-calendar-react/build/style.css';
import transactions from './data/transactions-carter.json';

class Home extends React.Component {
  render() {
    const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const uniqueDate = [...new Set(transactions.map((item, index) => item.date))];
    // const data = transactions.map((item) => {
    //   if (uniqueDate) {
    //     if (item.transactionType === 'debit' || item.transactionType === 'credit') {
    //       const { amount } = item;
    //       const totalYears = amount.reduce((acc, pilot) => acc + pilot, 0);
    //       return totalYears;
    //     }
    //   }
    //   return null;
    // });
    return (
      <div style={{ fontSize: '13px' }}>
        <HeatmapCalendar
          // data={transactions}
          data={[
            { date: '2018-01-01', total: 10, name: 'Total' },
            { date: '2018-01-02', total: 12, name: 'Total' },
            { date: '2018-01-03', total: 14, name: 'Total' },
            { date: '2018-01-04', total: 16, name: 'Total' },
            { date: '2018-01-05', total: 18, name: 'Total' },
            { date: '2018-01-06', total: 24, name: 'Total' },
            { date: '2018-01-07', total: 14, name: 'Total' },
            { date: '2018-01-08', total: 13, name: 'Total' },
            { date: '2018-01-09', total: 11, name: 'Total' },
            { date: '2018-01-10', total: 12, name: 'Total' },
            { date: '2018-01-11', total: 11, name: 'Total' },
            { date: '2018-01-12', total: 20, name: 'Total' },
            { date: '2018-01-13', total: 23, name: 'Total' },
            { date: '2018-01-14', total: 27, name: 'Total' },
            { date: '2018-01-15', total: 17, name: 'Total' },
            { date: '2018-01-16', total: 17, name: 'Total' },
            { date: '2018-01-17', total: 20, name: 'Total' },
            { date: '2018-01-18', total: 21, name: 'Total' },
            { date: '2018-01-19', total: 23, name: 'Total' },
            { date: '2018-01-20', total: 25, name: 'Total' },
            { date: '2018-01-21', total: 27, name: 'Total' },
            { date: '2018-01-22', total: 29, name: 'Total' },
            { date: '2018-01-23', total: 30, name: 'Total' },
            { date: '2018-01-24', total: 40, name: 'Total' },
            { date: '2018-01-25', total: 10, name: 'Total' },
            { date: '2018-01-26', total: 12, name: 'Total' },
            { date: '2018-01-27', total: 14, name: 'Total' },
            { date: '2018-01-28', total: 16, name: 'Total' },
            { date: '2018-01-29', total: 15, name: 'Total' },
            { date: '2018-01-30', total: 14, name: 'Total' },
            { date: '2018-01-31', total: 12, name: 'Total' },
            { date: '2018-02-01', total: 10, name: 'Total' },
            { date: '2018-02-02', total: 12, name: 'Total' },
            { date: '2018-02-03', total: 14, name: 'Total' },
            { date: '2018-02-04', total: 16, name: 'Total' },
            { date: '2018-02-05', total: 18, name: 'Total' },
            { date: '2018-02-06', total: 24, name: 'Total' },
            { date: '2018-02-07', total: 14, name: 'Total' },
            { date: '2018-02-08', total: 13, name: 'Total' },
            { date: '2018-02-09', total: 11, name: 'Total' },
            { date: '2018-02-10', total: 12, name: 'Total' },
            { date: '2018-02-11', total: 11, name: 'Total' },
            { date: '2018-02-12', total: 20, name: 'Total' },
            { date: '2018-02-13', total: 23, name: 'Total' },
            { date: '2018-02-14', total: 27, name: 'Total' },
            { date: '2018-02-15', total: 17, name: 'Total' },
            { date: '2018-02-16', total: 17, name: 'Total' },
            { date: '2018-02-17', total: 20, name: 'Total' },
            { date: '2018-02-18', total: 21, name: 'Total' },
            { date: '2018-02-19', total: 23, name: 'Total' },
            { date: '2018-02-20', total: 25, name: 'Total' },
            { date: '2018-02-21', total: 27, name: 'Total' },
            { date: '2018-02-22', total: 29, name: 'Total' },
            { date: '2018-02-23', total: 30, name: 'Total' },
            { date: '2018-02-24', total: 40, name: 'Total' },
            { date: '2018-02-25', total: 10, name: 'Total' },
            { date: '2018-02-26', total: 12, name: 'Total' },
            { date: '2018-02-27', total: 14, name: 'Total' },
            { date: '2018-02-28', total: 26, name: 'Total' },
            { date: '2018-03-01', total: 20, name: 'Total' },
            { date: '2018-03-02', total: 22, name: 'Total' },
            { date: '2018-03-03', total: 34, name: 'Total' },
            { date: '2018-03-04', total: 36, name: 'Total' },
            { date: '2018-03-05', total: 48, name: 'Total' },
            { date: '2018-03-06', total: 44, name: 'Total' },
            { date: '2018-03-07', total: 34, name: 'Total' },
            { date: '2018-03-08', total: 33, name: 'Total' },
            { date: '2018-03-09', total: 21, name: 'Total' },
            { date: '2018-03-10', total: 22, name: 'Total' },
            { date: '2018-03-11', total: 21, name: 'Total' },
            { date: '2018-03-12', total: 20, name: 'Total' },
            { date: '2018-03-13', total: 33, name: 'Total' },
            { date: '2018-03-14', total: 37, name: 'Total' },
            { date: '2018-03-15', total: 37, name: 'Total' },
            { date: '2018-03-16', total: 37, name: 'Total' },
            { date: '2018-03-17', total: 20, name: 'Total' },
            { date: '2018-03-18', total: 21, name: 'Total' },
            { date: '2018-03-19', total: 23, name: 'Total' },
            { date: '2018-03-20', total: 25, name: 'Total' },
            { date: '2018-03-21', total: 27, name: 'Total' },
            { date: '2018-03-22', total: 29, name: 'Total' },
            { date: '2018-03-23', total: 30, name: 'Total' },
            { date: '2018-03-24', total: 40, name: 'Total' },
            { date: '2018-03-25', total: 10, name: 'Total' },
            { date: '2018-03-26', total: 12, name: 'Total' },
            { date: '2018-03-27', total: 14, name: 'Total' },
            { date: '2018-03-28', total: 16, name: 'Total' },
            { date: '2018-03-29', total: 16, name: 'Total' },
            { date: '2018-03-30', total: 16, name: 'Total' },
            { date: '2018-03-31', total: 16, name: 'Total' },
            { date: '2018-04-01', total: 10, name: 'Total' },
            { date: '2018-04-02', total: 12, name: 'Total' },
            { date: '2018-04-03', total: 24, name: 'Total' },
            { date: '2018-04-04', total: 26, name: 'Total' },
            { date: '2018-04-05', total: 38, name: 'Total' },
            { date: '2018-04-06', total: 44, name: 'Total' },
            { date: '2018-04-07', total: 34, name: 'Total' },
            { date: '2018-04-08', total: 23, name: 'Total' },
            { date: '2018-04-09', total: 21, name: 'Total' },
            { date: '2018-04-10', total: 22, name: 'Total' },
            { date: '2018-04-11', total: 21, name: 'Total' },
            { date: '2018-04-12', total: 20, name: 'Total' },
            { date: '2018-04-13', total: 23, name: 'Total' },
            { date: '2018-04-14', total: 27, name: 'Total' },
            { date: '2018-04-15', total: 17, name: 'Total' },
            { date: '2018-04-16', total: 17, name: 'Total' },
            { date: '2018-04-17', total: 10, name: 'Total' },
            { date: '2018-04-18', total: 11, name: 'Total' },
            { date: '2018-04-19', total: 13, name: 'Total' },
            { date: '2018-04-20', total: 15, name: 'Total' },
            { date: '2018-04-21', total: 17, name: 'Total' },
            { date: '2018-04-22', total: 19, name: 'Total' },
            { date: '2018-04-23', total: 10, name: 'Total' },
            { date: '2018-04-24', total: 10, name: 'Total' },
            { date: '2018-04-25', total: 10, name: 'Total' },
            { date: '2018-04-26', total: 12, name: 'Total' },
            { date: '2018-04-27', total: 14, name: 'Total' },
            { date: '2018-04-28', total: 16, name: 'Total' },
            { date: '2018-04-29', total: 16, name: 'Total' },
            { date: '2018-04-30', total: 16, name: 'Total' },
          ]}
          weekdayLabels={yLabels}
          showDate={false}
          showTooltip
          keyNavigation
          setYear={2018}
        />
      </div>
    );
  }
}
export default Home;
