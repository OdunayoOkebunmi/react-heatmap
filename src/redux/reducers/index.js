import { combineReducers } from 'redux';
import { homeReducer } from './homeReducer';

export default combineReducers({
  loans: homeReducer,
});
