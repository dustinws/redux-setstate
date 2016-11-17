import { SET_STATE } from './actionTypes';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_STATE:
      const { changes, id } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          ...changes,
        },
      };

    default:
      state;
  }
}
