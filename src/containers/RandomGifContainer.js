import {connect} from 'react-redux';
import RandomGif from 'modules/randomGif/RandomGif';

export default connect(
  (state) => ({
    model: state.randomGif,
  })
)(RandomGif);
