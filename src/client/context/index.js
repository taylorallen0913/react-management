import React from 'react';
import { CreateProjectContextProvider } from './createProjectContext';
import { ImportProjectContextProvider } from './importProjectContext';
import { SidebarContextProvider } from './sidebarContext';

const AppContext = ({ children }) => {
  return (
    <SidebarContextProvider>
      <CreateProjectContextProvider>
        <ImportProjectContextProvider>{children}</ImportProjectContextProvider>
      </CreateProjectContextProvider>
    </SidebarContextProvider>
  );
};

export default AppContext;
