import {connect} from 'react-redux';
import CounterList from 'modules/counterList/CounterList';

export default connect(
  (state) => ({
    model: state.counterList,
  })
)(CounterList);
