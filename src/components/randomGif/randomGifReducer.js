import {loop, Effects} from '@jarvisaoieong/redux-loop';

import {REQUEST_MORE, NEW_GIF, newGif} from './randomGifActions';
import {fetchRandomGif} from './randomGifTasks';

export const initialState = {
  topic: '',
  gifUrl: require('./waiting.gif'),
};

export default (state = initialState, action) => {
  if (action.type === REQUEST_MORE) {
    return loop(
      state
    ,
      Effects.promise(fetchRandomGif, state.topic)
    );
  };

  if (action.type === NEW_GIF) {
    return loop({
      ...state,
      gifUrl: action.url,
    },
      Effects.none()
    );
  };

  return loop(state, Effects.none());
}
