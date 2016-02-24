import {INC, DEC} from './counterActions';

export const initialState = 0;

export default (state = initialState, action) => {
  if (action.type === INC) {
    return state + 1;
  }

  if (action.type === DEC) {
    return state - 1;
  }

  return state;
}
