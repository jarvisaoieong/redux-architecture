import {connect} from 'react-redux';
import RandomGifList from 'modules/randomGifList/RandomGifList';

export default connect(
  (state) => ({
    model: state.randomGifList,
  })
)(RandomGifList);
