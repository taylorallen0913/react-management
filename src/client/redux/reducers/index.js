import { combineReducers } from 'redux';

import sidebarReducer from './sidebarReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  modal: modalReducer,
});

export default rootReducer;
