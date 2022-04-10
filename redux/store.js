import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

import addFavoriteBike from  "./actions";
import ADD_FAVORITE_BIKE from "../utils/constants";

const initialFavoriteBike = { favoriteBike: null };

const favoriteBikeReducer = ( state = initialFavoriteBike, action) => {
    switch(action.type){

        case ADD_FAVORITE_BIKE:
            return { favoriteBike: action.payload};
        default:
            return state;
    }
}

const reducer = combineReducers({
    favoriteBike: favoriteBikeReducer,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk),
);

export default store;