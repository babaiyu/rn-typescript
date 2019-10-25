import {
  UserJSONState,
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  GetUserTypes
} from './types';

const initialState: UserJSONState = {
  usersJSON: [],
  fetchingUser: false
};

function getUserReducer(
  state = initialState,
  action: GetUserTypes
): UserJSONState {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        fetchingUser: true
      };

    case GET_USER_SUCCESS: {
      return {
        ...state,
        fetchingUser: false,
        usersJSON: action.userJSON
      };
    }

    case GET_USER_FAILED: {
      return {
        ...state,
        fetchingUser: false,
        usersJSON: action.userJSON
      };
    }

    default:
      return state;
  }
}

export default getUserReducer;
