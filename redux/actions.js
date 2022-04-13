import {
    ADD_FAVORITE_BIKE,
    TOGGLE_COLOR_MODE,
    REMOVE_FAVORITE_BIKE
} from '../utils/constants'

export const addFavoriteBike = (bikeInfo) => (dispatch) => {
    dispatch({
        type: ADD_FAVORITE_BIKE,
        payload: bikeInfo,
    });
};

export const removeFavoriteBike = (bikeID) => (dispatch) => {
    dispatch({
        type: REMOVE_FAVORITE_BIKE,
        payload: bikeID
    })
}


export const toggleColorMode = () => (dispatch) => {
    dispatch({
        type: TOGGLE_COLOR_MODE,
    });
};
