import { TEST_ACTION } from './types';

export const testAction = () => (dispatch) => {
  dispatch({
    type: TEST_ACTION,
  });
};
