import ADD_FAVORITE_BIKE from '../utils/constants';
import TOGGLE_COLOR_MODE from '../utils/constants';

const addFavoriteBike = (addFavoriteBike) => (dispatch) => {
    dispatch({
        type: ADD_FAVORITE_BIKE,
        payload: addFavoriteBike,
    });
};

const toggleColorMode = () => (dispatch) => {
    dispatch({
        type: TOGGLE_COLOR_MODE,
    });
};

export default
    {
        addFavoriteBike,
        toggleColorMode
    };