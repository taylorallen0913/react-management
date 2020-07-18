import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';

const App = () => {
  const isSidebarVisible = useSelector((state) => state.sidebar.isVisible);

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
