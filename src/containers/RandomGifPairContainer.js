import {connect} from 'react-redux';
import RandomGifPair from 'components/randomGifPair/RandomGifPair';

export default connect(
  (state) => ({
    model: state.randomGifPair,
  })
)(RandomGifPair);
