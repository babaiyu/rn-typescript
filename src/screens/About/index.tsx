import { connect } from 'react-redux'; // Connect to Redux
import { AppState } from '../../redux/reducers'; // Import for IntelliSense Typing the Reducer
import getUser from '../../redux/user/action'; // Import the Action

import About from './About'; // Import screen

// Generate State Global
const mapStateToProps = (state: AppState) => ({
  user: state.user.data,
  isLoading: state.user.isLoading
});

// Generate Dispatch Function
const mapDispatchToProps = (dispatch: any) => ({
  getUserAction: () => dispatch(getUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
