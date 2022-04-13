import {
  ADD_FAVORITE_BIKE,
  TOGGLE_COLOR_MODE,
  REMOVE_FAVORITE_BIKE,
} from '../utils/constants';

const initialFavoriteBike = {
  bikes: [],
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
        bikes: [ ...state.bikes, action.payload ]
      };
    
    case REMOVE_FAVORITE_BIKE:
      return {
        ...state,
        bikes: state.bikes.filter(bike => bike.ID !== action.payload)
      }

    default:
      return state;
  }
}


