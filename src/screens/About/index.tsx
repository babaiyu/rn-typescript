import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux'; // Connect to Redux
import getUser from '../../redux/user/action'; // Import the Action

import About from './About'; // Import screen
import {getIsLoading, getDataUser} from '../../redux/user/selector';

// Generate State Global
const mapStateToProps = (state: any) => ({
  user: getDataUser(state),
  isLoading: getIsLoading(state),
});

// Generate Dispatch Function
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getUserAction: () => getUser(),
    },
    dispatch,
  );

const Default = (props: any) => <About {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);
