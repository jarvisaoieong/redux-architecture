import {connect} from 'react-redux';
import RandomGifList from 'components/randomGifList/RandomGifList';

export default connect(
  (state) => ({
    model: state.randomGifList,
  })
)(RandomGifList);
