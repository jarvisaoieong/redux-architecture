import {connect} from 'react-redux';
import CounterFancy from 'components/counterFancy/CounterFancy';

export default connect(
  (state) => ({
    model: state.counterFancy,
  })
)(CounterFancy);
