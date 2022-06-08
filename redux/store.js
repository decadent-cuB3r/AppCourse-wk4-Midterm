import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from "./accountSlice";


import {
    colorModeReducer,
    addFavReducer,
} from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};


// const reducer = combineReducers({
//     favBike: addFavReducer,
// });

export const Store = configureStore({
    reducer: {
        account: accountReducer,
        settings: colorModeReducer,
        favBike: addFavReducer,

    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

persistStore(Store);