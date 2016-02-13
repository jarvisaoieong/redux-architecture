import {connect} from 'react-redux';
import RandomGif from 'components/randomGif/RandomGif';

export default connect(
  (state) => ({
    model: state.randomGif,
  })
)(RandomGif);
