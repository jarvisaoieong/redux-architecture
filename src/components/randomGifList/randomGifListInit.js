import _ from 'lodash';
import {loop, Effects} from '@jarvisaoieong/redux-loop';
import randomGifInit from 'components/randomGif/randomGifInit';
import {modify} from './randomGifListActions';

export default (topicList = []) => {
  const gifLoopList = _.map(topicList, randomGifInit);

  return loop({
    gifList: _.map(gifLoopList, (gifLoop, index) => ({
      id: index,
      data: gifLoop.model,
    })),
    nextId: topicList.length + 1,
  },
    Effects.batch(_.map(gifLoopList, (gifLoop, index) =>
      Effects.map(gifLoop.effect, modify, index)
    ))
  );
};
