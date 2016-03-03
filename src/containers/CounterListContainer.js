import {connect} from 'react-redux';
import {CounterList} from 'modules/counterList';

export default connect(
  (state) => ({
    model: state.counterList,
  })
)(CounterList);
