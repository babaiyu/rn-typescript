import { connect } from 'react-redux';

import Home from './Home';
import { AppState } from '../../redux/reducers';
import { sendMessage } from '../../redux/chat/action';

const mapStateToProps = (state: AppState) => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(Home);
