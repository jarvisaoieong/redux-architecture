import {loop, Effects} from '@jarvisaoieong/redux-loop';
import {fetchRandomGif} from './randomGifTasks';
import {newGif} from './randomGifActions';

export default (topic) => {
  return loop({
    topic,
    gifUrl: require('./waiting.gif'),
  },
    Effects.promise(fetchRandomGif, topic)
  );
}
