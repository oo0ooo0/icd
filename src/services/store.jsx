import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import dummyFeedsData from '../dummy/feeds.json';
import dummyCommentsData from '../dummy/comments.json';

const arrayToKeyValue = array => {
  if (!Array.isArray(array)) {
    return {};
  }

  const result = array.reduce((prev, current) => {
    if (!Object.prototype.hasOwnProperty(prev, current.id)) {
      return {
        [current.id.toString()]: { ...current, isLiked: false },
        ...prev,
      };
    }
    return {
      ...prev,
    };
  }, {});

  return result;
};

const initialState = { feeds: arrayToKeyValue(dummyFeedsData.data.list) };

const store = createStore(
  rootReducer,
  // key value 로 변환
  initialState,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
);

export default store;
