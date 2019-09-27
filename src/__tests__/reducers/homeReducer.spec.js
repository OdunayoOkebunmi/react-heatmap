import { actionLoading, actionFailed } from '@Actions/homeActions';
import { initialState, homeReducer } from '@Reducers/homeReducer';

let action, newState;
const error = 'an error occured';

describe('Loan Reducer', () => {
  it('should return initial state for unknown action types', () => {
    action = { type: null };
    newState = homeReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual(null);
    expect(newState.status).toEqual('status');
    expect(newState.data).toEqual({});
  });
  it('should handle action with type ACTION_LOADING', () => {
    const { type, payload } = actionLoading();
    newState = homeReducer(initialState, { type, payload });
    expect(type).toEqual('ACTION_LOADING');
    expect(payload.status).toEqual('actionLoading');
  });
  it('should handle action with type NOT_LOADING', () => {
    const { type, payload } = actionFailed(error);
    newState = homeReducer(initialState, { type, payload });
    expect(type).toEqual('NOT_LOADING');
    expect(payload.data).toEqual({});
    expect(payload.status).toEqual('actionFailed');
    expect(payload.error).toEqual(error);
  });
});
