import {loop, Effects} from '@jarvisaoieong/redux-loop';

import {
  MODIFY_FIRST,
  MODIFY_SECOND,
  modifyFirst,
  modifySecond,
} from './randomGifPairActions';

import randomGifReducer, {
  initialState as randomGifInitialState,
} from 'components/randomGif/randomGifReducer';

const initialState = {
  first: randomGifInitialState,
  second: randomGifInitialState,
};

export default (state = initialState, action) => {
  if (action.type === MODIFY_FIRST) {
    const {model, effect} = randomGifReducer(state.first, action.action);

    return loop({
      ...state,
      first: model,
    },
      Effects.map(effect, modifyFirst),
    );
  };

  if (action.type === MODIFY_SECOND) {
    const {model, effect} = randomGifReducer(state.second, action.action);

    return loop({
      ...state,
      second: model,
    },
      Effects.map(effect, modifySecond),
    );
  };

  return loop(state, Effects.none());
}
