import {connect} from 'react-redux';
import RandomGifPair from 'modules/randomGifPair/RandomGifPair';

export default connect(
  (state) => ({
    model: state.randomGifPair,
  })
)(RandomGifPair);
