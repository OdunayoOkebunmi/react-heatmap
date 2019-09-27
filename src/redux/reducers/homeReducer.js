import { ACTION_LOADING, NOT_LOADING } from '@Actions/types';

export const initialState = {
  error: null,
  data: {},
  status: 'status',
};

export const homeReducer = (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};
