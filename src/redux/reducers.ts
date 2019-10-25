import { combineReducers } from 'redux';

import chatReducer from './chat/reducer';
import getUserReducer from './user/reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  getUser: getUserReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
