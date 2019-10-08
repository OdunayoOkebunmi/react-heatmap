import transactionData from './data/transactions-carter.json';
import {
  ACTION_LOADING,
  NOT_LOADING,
  GET_TRANSACTIONS,
} from './types';

export const actionLoading = () => ({
  type: ACTION_LOADING,
  payload: {
    status: 'actionLoading',
    error: null,
    data: {},
  },
});

export const actionFailed = error => ({
  type: NOT_LOADING,
  payload: {
    status: 'actionFailed',
    error,
    data: {},
  },
});

export const transactions = data => ({
  type: GET_TRANSACTIONS,
  payload: {
    status: 'actionSuccess',
    error: null,
    data,
  },
});

export const getTransactions = () => async (dispatch) => {
  dispatch(actionLoading());
  try {
    dispatch(transactions(transactionData));
    return transactionData;
  } catch (errorResponse) {
    dispatch(actionFailed(errorResponse));
  }
};
