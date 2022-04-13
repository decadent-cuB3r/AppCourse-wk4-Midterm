import {
    ADD_FAVORITE_BIKE,
    TOGGLE_COLOR_MODE,
    REMOVE_FAVORITE_BIKE
} from '../utils/constants'

export const addFavoriteBike = (bikeInfo) => (dispatch) => {
    const item = {
        brand: bikeInfo.brand,
        ID: bikeInfo.ID,
        model: bikeInfo.model,
        image: bikeInfo.image,
        grade: bikeInfo.grade,
        rating: bikeInfo.rating,
        exhaust: bikeInfo.exhaust,
        engine: bikeInfo.engine,
        dryWeight: bikeInfo.dryWeight,
        horsePower: bikeInfo.horsePower,
        seatHeight: bikeInfo.seatHeight,
        dimensions: bikeInfo.dimensions,
    }
    dispatch({
        type: ADD_FAVORITE_BIKE,
        payload: item,
    });
};

export const removeFavoriteBike = (bikeID) => (dispatch) => {
    dispatch({
        type: REMOVE_FAVORITE_BIKE,
        payload: bikeID,
    })
}


export const toggleColorMode = () => (dispatch) => {
    dispatch({
        type: TOGGLE_COLOR_MODE,
    });
};
