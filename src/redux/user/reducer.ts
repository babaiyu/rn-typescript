import {
  GET_USER,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  Action,
  State
} from './types';

// Generate State in Redux
const initialState: State = {
  data: [],
  isLoading: false
};

// Function for Reducer
const userReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        data: []
      };

    default:
      return state;
  }
};

export default userReducer;
