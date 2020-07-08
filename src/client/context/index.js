import React from 'react';
import { CreateProjectContextProvider } from './createProjectContext';
import { ImportProjectContextProvider } from './importProjectContext';

const AppContext = ({ children }) => {
  return (
    <CreateProjectContextProvider>
      <ImportProjectContextProvider>{children}</ImportProjectContextProvider>
    </CreateProjectContextProvider>
  );
};

export default AppContext;
