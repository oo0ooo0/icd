import { FEED_LIKE } from './actions';

const initialState = {};

export function feedReducer(state = initialState, action) {
  switch (action.type) {
    case FEED_LIKE: {
      console.log('state[action.payload.id]', state[action.payload.id]);
      const currentItem = state[action.payload.id];
      currentItem.isLiked = !currentItem.isLiked;

      if (!currentItem.likedCount) {
        currentItem.likedCount = 0;
      }

      if (currentItem.isLiked) {
        currentItem.likedCount = currentItem.likedCount + 1;
      } else {
        currentItem.likedCount = currentItem.likedCount - 1;
      }
      console.log('after', currentItem.isLiked);
      const newState = {
        ...state,
        [action.payload.id]: currentItem,
      };
      return newState;
    }

    default:
      return state;
  }
}
