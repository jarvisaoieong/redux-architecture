import {connect} from 'react-redux';
import CounterPair from 'components/counterPair/CounterPair';

export default connect(
  (state) => ({
    model: state.counterPair,
  })
)(CounterPair);
