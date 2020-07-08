import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './context';

import 'infima/dist/css/default/default.css';

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById('app'),
);
