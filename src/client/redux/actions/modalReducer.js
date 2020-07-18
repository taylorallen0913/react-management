import {
  SET_CREATE_PROJECT_MODAL_VISIBILITY,
  SET_IMPORT_PROJECT_MODAL_VISIBILITY,
} from './types';

export const setCreateProjectModalVisiblilty = (visibility) => (dispatch) => {
  dispatch({
    type: SET_CREATE_PROJECT_MODAL_VISIBILITY,
    payload: visibility,
  });
};

export const setImportProjectModalVisiblilty = (visibility) => (dispatch) => {
  dispatch({
    type: SET_IMPORT_PROJECT_MODAL_VISIBILITY,
    payload: visibility,
  });
};
