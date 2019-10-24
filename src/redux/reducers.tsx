import { combineReducers } from 'redux';

import { chatReducer } from './example/reducers';

const root = combineReducers({
    chat: chatReducer,
})

export type rootReducers = ReturnType<typeof root>