import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { CreateProjectContextProvider } from './context/createProjectContext';
import { ImportProjectContextProvider } from './context/importProjectContext';

import './App.css';

const App = () => {
  return (
    <CreateProjectContextProvider>
      <ImportProjectContextProvider>
        <Router>
          <Sidebar />
          <main>
            <Navbar />
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      </ImportProjectContextProvider>
    </CreateProjectContextProvider>
  );
};

export default App;
