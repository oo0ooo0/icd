import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import dummyFeedsData from '../dummy/feeds.json';
import dummyCommentsData from '../dummy/comments.json';

function arrayToKeyValue(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i].id] = array[i];
    result[array[i].id].isLiked = false;
    console.log('현재 result 객체', result);
  }
  return result;
}

const initialState = {
  feeds: arrayToKeyValue(dummyFeedsData.data.list),
  comments: dummyCommentsData,
};

const store = createStore(
  rootReducer,
  // key value 로 변환
  initialState,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
);

export default store;
