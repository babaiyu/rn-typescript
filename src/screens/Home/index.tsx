import {connect} from 'react-redux';

import Home from './Home'; // Import Screen
import {AppState} from '../../redux/reducers'; // For IntelliSense Typing Redux
import {sendMessage} from '../../redux/chat/action'; // For running hit the Action

// Get the Global State by enter this.props.your-props
const mapStateToProps = (state: AppState) => ({
  chat: state.chat,
});

export default connect(
  mapStateToProps,
  {sendMessage},
)(Home);
