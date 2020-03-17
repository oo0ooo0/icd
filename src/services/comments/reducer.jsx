import { COMMENT_ADD, COMMENT_REPLY } from './actions';

const initialState = {};

export function commentReducer(state = initialState, action) {
  switch (action.type) {
    case COMMENT_ADD: {
      return state;
    }
    case COMMENT_REPLY: {
      return state;
    }
    default:
      return state;
  }
}
