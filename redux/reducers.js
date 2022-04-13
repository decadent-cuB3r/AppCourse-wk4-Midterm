import {
  ADD_FAVORITE_BIKE,
  TOGGLE_COLOR_MODE
} from '../utils/constants';

const initialFavoriteBike = {
  bikes: [{
    brand: "",
    ID: "",
    model: "",
    image: "",
    grade: "",
    rating: "",
    exhaust: "",
    engine: "",
    dryWeight: "",
    horsePower: "",
    seatHeight: "",
    dimensions: ""
  }],
};
const initialColorMode = { colorMode: "light" };

export const colorModeReducer = (state = initialColorMode, action) => {
  switch (action.type) {

    case TOGGLE_COLOR_MODE:
      const colorMode =
        (state.colorMode == 'light')
          ? 'dark'
          : 'light';
      return { colorMode };

    default:
      return state;
  }
}


export const addFavReducer = (state = initialFavoriteBike, action) => {
  switch (action.type) {

    case ADD_FAVORITE_BIKE:
      return {
        ...state, //copying original state
        bikes: [ ...state, action.paylaod]
      };

    default:
      return state;
  }
}
