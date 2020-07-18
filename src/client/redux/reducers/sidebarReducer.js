import { SET_SIDEBAR_VISIBILITY } from '../actions/types';

const initialState = {
  isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_VISIBILITY:
      return {
        ...state,
        isVisible: action.payload,
      };
    default:
      return state;
  }
};
