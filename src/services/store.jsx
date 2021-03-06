import { createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import dummyFeedsData from '../dummy/feeds.json';
import dummyCommentsData from '../dummy/comments.json';

function arrayToKeyValue(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i].id] = array[i];
    result[array[i].id].isLiked = false;
    result[array[i].id].createdAt = array[i].createdAt.slice(0, 10);
  }
  return result;
}

function arrayToKeyValue2(array) {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    array[i].createdAt = array[i].createdAt.slice(0, 10);

    if (array[i].replies) {
      for (let j = 0; j < array[i].replies.list.length; j++) {
        array[i].replies.list[j].createdAt = array[i].replies.list[j].createdAt.slice(0, 10);
      }
    }

    if (array[i].replies) {
    }
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

const initialState = {
  feeds: arrayToKeyValue(dummyFeedsData.data.list),
  comments: arrayToKeyValue2(dummyCommentsData.data.list),
};

const store = createStore(
  rootReducer,
  initialState,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose()
);

export default store;
