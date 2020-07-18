import { SET_SIDEBAR_VISIBILITY } from './types';

export const setSidebarVisibility = (visibility) => (dispatch) => {
  dispatch({
    type: SET_SIDEBAR_VISIBILITY,
    payload: visibility,
  });
};
