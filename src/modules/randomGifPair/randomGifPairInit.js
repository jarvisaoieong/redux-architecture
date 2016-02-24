import {loop, Effects} from '@jarvisaoieong/redux-loop';

import randomGifInit from 'modules/randomGif/randomGifInit';
import {modifyFirst, modifySecond} from './randomGifPairActions';

export default (firstTopic, secondTopic) => {
  const {
    model: firstModel,
    effect: firstEffect,
  } = randomGifInit(firstTopic);

  const {
    model: secondModel,
    effect: secondEffect,
  } = randomGifInit(secondTopic);

  return loop({
    first: firstModel,
    second: secondModel,
  },
    Effects.batch([
      Effects.map(firstEffect, modifyFirst),
      Effects.map(firstEffect, modifySecond),
    ])
  );

}
