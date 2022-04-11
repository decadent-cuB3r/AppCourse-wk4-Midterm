import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // Grey / Inactived
    grey100: "#666666",
    //blackpink / activated
    pink100: "#F9595F",
    // Background
    BG400: "#FFFFFF",
    // Componenet bg
    comBG100: "#FFFFFF",
    //　Componenet Primary color
    primary700: "#F9595F",
    // Secondary
    secondary700: "#707070",
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    // Dark theme / inactivated
    grey100: "#989898",
    //blackpink / activated
    pink100: "#F9595F",
    // Background
    BG400: "#161E29",
    // Component bg
    comBG100: "#232F3F",
    // Component Primary color
    primary700: "#F9595F",
    //secondary
    secondary700: "#707070"
  },
};