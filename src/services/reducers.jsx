import { combineReducers } from 'redux';
import { feedReducer } from './feeds/reducer';
import { commentReducer } from './comments/reducer';

export const rootReducer = combineReducers({
  feeds: feedReducer,
  comments: commentReducer,
});
