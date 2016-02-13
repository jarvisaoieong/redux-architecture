import {ADD, REMOVE, MODIFY} from './counterListActions';
import _ from 'lodash';
import counterReducer, {initialState as counterInitialState} from 'components/counter/counterReducer';
import counterInit from 'components/counter/counterInit';

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
