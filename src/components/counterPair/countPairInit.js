import counterInit from 'components/counter/counterInit';

export default (first, second) => ({
  first: counterInit(first),
  second: counterInit(second),
})
