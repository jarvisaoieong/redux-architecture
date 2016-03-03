import {connect} from 'react-redux';
import {CounterFancy} from 'modules/counterFancy';

export default connect(
  (state) => ({
    model: state.counterFancy,
  })
)(CounterFancy);
