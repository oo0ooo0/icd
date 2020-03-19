import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import dummyFeedsData from '../dummy/feeds.json';
import dummyCommentsData from '../dummy/comments.json';

function arrayToKeyValue(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i].id] = array[i];
    result[array[i].id].isLiked = false;
  }
  return result;
}

function arrayToKeyValue2(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    if (result[array[i].feedId]) {
      if (result[array[i].feedId].comments) {
        result[array[i].feedId].comments.push(array[i]);
      } else {
        result[array[i].feedId].comments = [array[i]];
      }
    } else {
      result[array[i].feedId] = {};
      if (result[array[i].feedId].comments) {
        result[array[i].feedId].comments.push(array[i]);
      } else {
        result[array[i].feedId].comments = [array[i]];
      }
    }
  }
  return result;
}

// console.log('list', dummyCommentsData.data.list);

const initialState = {
  feeds: arrayToKeyValue(dummyFeedsData.data.list),
  comments: arrayToKeyValue2(dummyCommentsData.data.list),
};
console.log('store', initialState.comments);

const store = createStore(
  rootReducer,
  // key value 로 변환
  initialState,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
);

export default store;
