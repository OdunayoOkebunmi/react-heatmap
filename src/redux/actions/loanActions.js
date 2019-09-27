
import { ACTION_LOADING, NOT_LOADING } from './types';

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
