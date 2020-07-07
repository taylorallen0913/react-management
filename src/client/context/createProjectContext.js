import React, { createContext, useReducer } from 'react';

export const CreateProjectContext = createContext(false);

const CreateProjectReducer = (state, action) => {
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

export const CreateProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CreateProjectReducer, initialState);

  const openModal = () => {
    dispatch({ type: 'OPEN_MODAL' });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <CreateProjectContext.Provider
      value={{
        modal: {
          isCreateProjectModalVisible: state.modal.isModalVisible,
          openCreateProjectModal: openModal,
          closeCreateProjectModal: closeModal,
        },
      }}
    >
      {children}
    </CreateProjectContext.Provider>
  );
};
