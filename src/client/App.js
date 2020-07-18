import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { SidebarContext } from './context/sidebarContext';

import './App.css';

const App = () => {
  const { isSidebarVisible } = useContext(SidebarContext);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
