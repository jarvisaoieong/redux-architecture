import {loop, Effects} from '@jarvisaoieong/redux-loop';
import {NEW_GIF_COUNT} from './newGifCounterActions';

export const initialState = 0;

export default (state = initialState, action) => {
  if (action.type === NEW_GIF_COUNT) {
    return loop(
      state + 1
    ,
      Effects.none()
    );
  }

  return loop(state, Effects.none());
}
