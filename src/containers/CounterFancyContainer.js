import {connect} from 'react-redux';
import CounterFancy from 'modules/counterFancy/CounterFancy';

export default connect(
  (state) => ({
    model: state.counterFancy,
  })
)(CounterFancy);
