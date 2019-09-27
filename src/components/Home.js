/* eslint-disable no-unused-vars */
import React from 'react';
import HeatmapCalendar from 'heatmap-calendar-react';
import 'heatmap-calendar-react/build/style.css';
import transactions from './data/transactions-carter.json';

class Home extends React.Component {
  render() {
    const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const uniqueDate = [...new Set(transactions.map((item, index) => item.date))];
    const data = transactions.map((item, index) => item.date);
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
      <div>
        <HeatmapCalendar
          data={transactions}
          weekdayLabels={yLabels}
          setYear={2018}
        />
      </div>
    );
  }
}
export default Home;
