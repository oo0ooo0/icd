import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';

const store = createStore(
  rootReducer,
  { feeds: [] },
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
);

export default store;
