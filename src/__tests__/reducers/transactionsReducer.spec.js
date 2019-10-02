import { actionLoading, actionFailed, transactions } from '@Actions/transactions';
import { initialState, transactionsReducer } from '@Reducers/transactionsReducer';

let action, newState;
const error = 'an error occured';
const data = [];
describe('Loan Reducer', () => {
  it('should return initial state for unknown action types', () => {
    action = { type: null };
    newState = transactionsReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual(null);
    expect(newState.status).toEqual('status');
    expect(newState.data).toEqual([]);
  });
  it('should handle action with type ACTION_LOADING', () => {
    const { type, payload } = actionLoading();
    newState = transactionsReducer(initialState, { type, payload });
    expect(type).toEqual('ACTION_LOADING');
    expect(payload.status).toEqual('actionLoading');
  });
  it('should handle action with type NOT_LOADING', () => {
    const { type, payload } = actionFailed(error);
    newState = transactionsReducer(initialState, { type, payload });
    expect(type).toEqual('NOT_LOADING');
    expect(payload.status).toEqual('actionFailed');
    expect(payload.error).toEqual(error);
  });
  it('should handle action with type GET_TRANSACTIONS', () => {
    const { type, payload } = transactions(data);
    newState = transactionsReducer(initialState, { type, payload });
    expect(type).toEqual('GET_TRANSACTIONS');
    expect(payload.data).toEqual(data);
    expect(payload.status).toEqual('actionSuccess');
  });
});
