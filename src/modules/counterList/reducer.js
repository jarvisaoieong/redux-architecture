import {ADD, REMOVE, MODIFY} from './actions';
import _ from 'lodash';
import {
  reducer as counterReducer,
  initialState as counterInitialState,
  init as counterInit,
} from 'modules/counter';

export const initialState = {
  counters: [{id: 0, data: counterInitialState}],
  nextId: 1,
}

export default (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      ...state,
      counters: [
        ...state.counters,
        {id: state.nextId, data: counterInit()},
      ],
      nextId: state.nextId + 1,
    };
  };

  if (action.type === REMOVE) {
    return {
      ...state,
      counters: _.drop(state.counters),
    };
  };

  if (action.type === MODIFY) {
    return {
      ...state,
      counters: _.map(state.counters, (counter) => {
        if (counter.id !== action.id) {
          return counter;
        };
        return {
          ...counter,
          data: counterReducer(counter.data, action.action),
        };
      }),
    };
  };

  return state;
}
