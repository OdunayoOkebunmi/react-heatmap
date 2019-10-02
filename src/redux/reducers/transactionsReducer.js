import {
  ACTION_LOADING,
  NOT_LOADING,
  GET_TRANSACTIONS,
} from '@Actions/types';

export const initialState = {
  error: null,
  data: [],
  status: 'status',
};

export const transactionsReducer = (state = initialState, {
  type,
  payload,
}) => {
  switch (type) {
    case ACTION_LOADING:
      return {
        ...state,
        status: payload.status,
      };
    case NOT_LOADING:
      return {
        ...state,
        error: payload.error,
        status: payload.status,
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        data: payload.data,
        status: payload.status,
      };
    default:
      return state;
  }
};
