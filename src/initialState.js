import {loop, Effects} from '@jarvisaoieong/redux-loop';

import randomGifInit from 'modules/randomGif/randomGifInit';
import randomGifPairInit from 'modules/randomGifPair/randomGifPairInit';
import randomGifListInit from 'modules/randomGifList/randomGifListInit';

const {
  model: randomGifModel,
  effect: randomGifEffect,
} = randomGifInit('funny cats');

const {
  model: randomGifPairModel,
  effect: randomGifPairEffect,
} = randomGifPairInit('funny cats', 'funny dogs');

const {
  model: randomGifListModel,
  effect: randomGifListEffect,
} = randomGifListInit(['hello', 'world']);

export default loop({
  randomGif: randomGifModel,
  randomGifPair: randomGifPairModel,
  randomGifList: randomGifListModel,
},
  Effects.batch([
    randomGifEffect,
    randomGifPairEffect,
    randomGifListEffect,
  ])
);
