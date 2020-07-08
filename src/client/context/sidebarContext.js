import React, { createContext, useReducer } from 'react';

export const SidebarContext = createContext();

const SidebarReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return true;
    case 'CLOSE_SIDEBAR':
      return false;
    default:
      return state;
  }
};

export const SidebarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SidebarReducer, false);

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarVisible: state,
        openSidebar: openSidebar,
        closeSidebar: closeSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
