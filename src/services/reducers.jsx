import { combineReducers } from 'redux';
import { feedReducer } from './feeds/reducer';

export const rootReducer = combineReducers({
  feeds: feedReducer,
});
