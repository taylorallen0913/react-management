import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Test from './pages/Test';

import { SidebarContext } from './context/sidebarContext';

import './App.css';

const App = () => {
  const { isSidebarVisible } = useContext(SidebarContext);

  return (
    <Router>
      <main className={isSidebarVisible ? 'sidebar-visible' : null}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
