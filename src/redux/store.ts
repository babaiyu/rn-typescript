import { createStore, applyMiddleware } from 'redux'; // I know you know this is for redux
import { persistStore, persistReducer } from 'redux-persist'; // For save Global State to Local Storage
import thunkMiddleware from 'redux-thunk'; // For Middleware
import { composeWithDevTools } from 'redux-devtools-extension'; // For devtools
import AsyncStorage from '@react-native-community/async-storage'; // Local Storage
import logger from 'redux-logger'; // Easy Logging

// Get Combine Reducer
import rootReducer from './reducers';

// configure the middleware
const middlewares = [thunkMiddleware, logger];
const middlewareEnhancer = applyMiddleware(...middlewares);

// Configure Local Storage
const persistObj = {
  key: 'root',
  storage: AsyncStorage
};
const persistConfig = persistReducer(persistObj, rootReducer);

// Configure Store
export const store = createStore(
  persistConfig,
  composeWithDevTools(middlewareEnhancer)
);

// Configure Store
export const persistor = persistStore(store);
