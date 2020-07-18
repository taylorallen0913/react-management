import {
  SET_CREATE_PROJECT_MODAL_VISIBILITY,
  SET_IMPORT_PROJECT_MODAL_VISIBILITY,
} from '@actions/types';

const initialState = {
  createProjectModal: {
    isVisible: false,
  },
  importProjectModal: {
    isVisible: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATE_PROJECT_MODAL_VISIBILITY:
      return {
        ...state,
        createProjectModal: {
          ...state.createProjectModal,
          isVisible: action.payload,
        },
      };
    case SET_IMPORT_PROJECT_MODAL_VISIBILITY:
      return {
        ...state,
        importProjectModal: {
          ...state.importProjectModal,
          isVisible: action.payload,
        },
      };
    default:
      return state;
  }
};
