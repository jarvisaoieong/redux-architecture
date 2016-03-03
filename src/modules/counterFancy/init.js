import {init as counterInit} from 'modules/counter';

export default (count) => ({
  counters: [{id: 0, data: counterInit(count)}],
  nextId: 1,
});
