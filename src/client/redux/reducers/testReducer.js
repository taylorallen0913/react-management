import { TEST_ACTION } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        hello: 'world',
      };
    default:
      return state;
  }
};
