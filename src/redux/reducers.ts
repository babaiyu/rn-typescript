import {combineReducers} from 'redux';

// Reducer from any state
import chatReducer from './chat/reducer';
import userReducer from './user/reducer';

// Combine Reducer
const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
});

// For IntelliSense Redux
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
