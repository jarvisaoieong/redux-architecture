import {connect} from 'react-redux';
import {CounterPair} from 'modules/counterPair';

export default connect(
  (state) => ({
    model: state.counterPair,
  })
)(CounterPair);
