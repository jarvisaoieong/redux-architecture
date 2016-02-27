import {connect} from 'react-redux';
import NewGifCounter from 'modules/newGifCounter/NewGifCounter';

export default connect(
  (state) => ({
    model: state.newGifCounter,
  })
)(NewGifCounter);
