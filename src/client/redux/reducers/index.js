import { combineReducers } from 'redux';

import testReducer from './testReducer';
import secondReducer from './secondReducer';

const rootReducer = combineReducers({
  test: testReducer,
  second: secondReducer,
});

export default rootReducer;
