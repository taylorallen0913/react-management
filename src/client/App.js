import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { CreateProjectContextProvider } from './context/createProjectContext';
import { ImportProjectContextProvider } from './context/importProjectContext';

import './App.css';

const App = () => {
  return (
    <CreateProjectContextProvider>
      <ImportProjectContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ImportProjectContextProvider>
    </CreateProjectContextProvider>
  );
};

export default App;
