import {MODIFY_FIRST, MODIFY_SECOND} from './actions';
import {
  reducer as counterReducer,
  initialState as counterInitialState,
} from 'modules/counter';

export const initialState = {
  first: counterInitialState,
  second: counterInitialState,
};

export default (state = initialState, action) => {
  if (action.type === MODIFY_FIRST) {
    return {
      ...state,
      first: counterReducer(state.first, action.action),
    };
  };

  if (action.type === MODIFY_SECOND) {
    return {
      ...state,
      second: counterReducer(state.second, action.action),
    };
  };

  return state;
}
