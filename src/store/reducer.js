import {combineReducers} from '@jarvisaoieong/redux-loop';
import counter from 'modules/counter/counterReducer';
import counterPair from 'modules/counterPair/counterPairReducer';
import counterList from 'modules/counterList/counterListReducer';
import counterFancy from 'modules/counterFancy/counterFancyReducer';
import randomGif from 'modules/randomGif/randomGifReducer';
import randomGifPair from 'modules/randomGifPair/randomGifPairReducer';
import randomGifList from 'modules/randomGifList/randomGifListReducer';

export default combineReducers({
  counter,
  counterPair,
  counterList,
  counterFancy,
  randomGif,
  randomGifPair,
  randomGifList,
});
