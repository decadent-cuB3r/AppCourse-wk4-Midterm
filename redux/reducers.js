const initialFavoriteBike = { favoriteBike: null };
const initialColorMode = { colorMode: "light" };

const colorModeReducer = (state = initialColorMode, action) => {
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