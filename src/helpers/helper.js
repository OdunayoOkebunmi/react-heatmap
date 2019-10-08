/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import moment from 'moment';

const sortUniqueDate = (dates) => {
  const newDateList = [...new Set(dates)];
  return newDateList.sort((a, b) => new Date(a.date) - new Date(b.date));
};

const getUniqueDate = (data) => {
  const dateArray = data.map(item => item.date);
  const newDateArray = [...new Set(dateArray)];
  return newDateArray;
};

export const getMinimumAndMaximumDate = (transaction) => {
  const dates = transaction.map(items => moment(items.date)._d);
  const minimumDate = new Date(Math.min.apply(null, dates));
  const maximumDate = new Date(Math.max.apply(null, dates));
  return { minimumDate, maximumDate };
};

export const getAccumulatedTransaction = (transaction) => {
  const dateList = [];
  const newDateArray = getUniqueDate(transaction);
  newDateArray.map((date) => {
    const dateObject = {};
    let profit = 0;
    transaction
      .filter(data => date === data.date)
      .map((data) => {
        if (data.transactionType === 'debit') {
          profit -= data.amount;
        } else {
          profit += data.amount;
        }
        dateObject.date = date;
        dateObject.profit = profit;
        dateList.push(dateObject);
      });
  });
  const sortTransaction = sortUniqueDate(dateList);
  return sortTransaction;
};
