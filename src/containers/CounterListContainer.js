import {connect} from 'react-redux';
import CounterList from 'components/counterList/CounterList';

export default connect(
  (state) => ({
    model: state.counterList,
  })
)(CounterList);
