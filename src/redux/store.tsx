import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergerLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducers from './reducers';

const persist = persistReducer(
    {
        timeout: 10000,
        key: 'root',
        storage: AsyncStorage,
        stateReconciler: autoMergerLevel2,
    },
    rootReducers,
);

export const store = createStore(persist, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);