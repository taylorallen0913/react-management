import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@reducers';

const initialState = {
  sidebar: {
    isVisible: false,
  },
  modal: {
    createProjectModal: {
      isVisible: false,
    },
    importProjectModal: {
      isVisible: false,
    },
  },
};

const middleware = [thunk];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(rootReducer, initialState, enhancers);

export default store;
