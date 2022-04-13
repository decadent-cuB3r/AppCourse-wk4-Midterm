import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import {
    colorModeReducer,
    addFavReducer,
} from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};


const reducer = combineReducers({
    favBike: addFavReducer,
});

export const Store = createStore(
    reducer,
    applyMiddleware(thunk),
);

export const persistor = persistStore(Store);