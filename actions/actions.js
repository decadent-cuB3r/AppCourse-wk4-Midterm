import ADD_FAVORITE_BIKE from '../utils/constants';

const addFavoriteBike = (addFavoriteBike) => (dispatch) => {
    dispatch({
        type: ADD_FAVORITE_BIKE,
        payload: addFavoriteBike,
    });
};