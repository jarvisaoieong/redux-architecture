import {combineReducers} from '@jarvisaoieong/redux-loop';
import counter from 'modules/counter/counterReducer';
import counterPair from 'modules/counterPair/counterPairReducer';
import counterList from 'modules/counterList/counterListReducer';
import counterFancy from 'modules/counterFancy/counterFancyReducer';
import randomGif from 'modules/randomGif/randomGifReducer';
import randomGifPair from 'modules/randomGifPair/randomGifPairReducer';
import randomGifList from 'modules/randomGifList/randomGifListReducer';
import newGifCounter from 'modules/newGifCounter/newGifCounterReducer';
import newGifCounterHOR from 'modules/newGifCounter/newGifCounterHOR';

export default combineReducers({
  counter,
  counterPair,
  counterList,
  counterFancy,
  randomGif: newGifCounterHOR('type')(randomGif),
  randomGifPair: newGifCounterHOR('action.type')(randomGifPair),
  randomGifList: newGifCounterHOR('action.type')(randomGifList),
  newGifCounter,
});
