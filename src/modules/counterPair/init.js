import {init as counterInit} from 'modules/counter';

export default (first, second) => ({
  first: counterInit(first),
  second: counterInit(second),
})
