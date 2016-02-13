import counterInit from 'components/counter/counterInit';

export default (count) => ({
  counters: [{id: 0, data: counterInit(count)}],
  nextId: 1,
});
