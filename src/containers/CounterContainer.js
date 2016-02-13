import {connect} from 'react-redux';
import Counter from 'components/counter/Counter';

export default connect(
  (state) => ({
    model: state.counter,
  })
)(Counter);
