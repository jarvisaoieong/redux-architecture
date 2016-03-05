import {combineReducers} from '@jarvisaoieong/redux-loop';
import {reducer as counter} from 'modules/counter';
import {reducer as counterPair} from 'modules/counterPair';
import {reducer as counterList} from 'modules/counterList';
import {reducer as counterFancy} from 'modules/counterFancy';
import {reducer as randomGif} from 'modules/randomGif';
import {reducer as randomGifPair} from 'modules/randomGifPair';
import {reducer as randomGifList} from 'modules/randomGifList';

export default combineReducers({
  counter,
  counterPair,
  counterList,
  counterFancy,
  randomGif,
  randomGifPair,
  randomGifList,
});
