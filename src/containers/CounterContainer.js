import {connect} from 'react-redux';
import Counter from 'modules/counter/Counter';

export default connect(
  (state) => ({
    model: state.counter,
  })
)(Counter);
