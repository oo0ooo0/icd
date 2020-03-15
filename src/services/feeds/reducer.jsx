import { READ_FEEDS, READ_FEED_DETAIL, FEED_LIKE, FEED_UNLIKE } from './actions';

export function feedReducer(state = [], action) {
  switch (action.type) {
    case READ_FEEDS: {
      return state;
    }
    case READ_FEED_DETAIL: {
      return state;
    }
    case FEED_LIKE: {
      return state;
    }
    case FEED_UNLIKE: {
      return state;
    }
    default:
      return state;
  }
}
