import { connect } from 'react-redux';

import About from './About';
import { AppState } from '../../redux/reducers';

const mapStateToProps = (state: AppState) => ({
  user: state.getUser.usersJSON,
  fetchingUser: state.getUser.fetchingUser
});

export default connect(mapStateToProps)(About);
