import React, { createContext, useReducer } from 'react';

export const ImportProjectContext = createContext(false);

const ImportProjectReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          isModalVisible: true,
        },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          isModalVisible: false,
        },
      };
    default:
      return state;
  }
};

const initialState = {
  modal: {
    isModalVisible: false,
  },
};

export const ImportProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ImportProjectReducer, initialState);

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <ImportProjectContext.Provider
      value={{
        modal: {
          isImportProjectModalVisible: state.modal.isModalVisible,
          openImportProjectModal: openModal,
          closeImportProjectModal: closeModal,
        },
      }}
    >
      {children}
    </ImportProjectContext.Provider>
  );
};
