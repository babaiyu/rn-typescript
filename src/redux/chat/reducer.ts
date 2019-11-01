import {
  ChatState,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes
} from './types';

// Generate State for Redux
const initialState: ChatState = {
  messages: []
};

// Create Function for Reducer
function chatReducer(state = initialState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      };

    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          item => item.timestamp !== action.meta.timestamp
        )
      };

    default:
      return state;
  }
}

export default chatReducer;
