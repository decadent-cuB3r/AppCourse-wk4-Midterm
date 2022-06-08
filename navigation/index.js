import React from 'react';
import { Platform } from 'react-native';
import { useSelector } from "react-redux";

import { NativeBaseProvider, extendTheme, KeyboardAvoidingView } from 'native-base';
import { useColorMode } from 'native-base';

import MyDrawer from './MyDrawers';

import AuthScreen from '../screen/AuthScreen';
import { selectLogin } from "../redux/accountSlice";

const Navigation = () => {
    const { colorMode } = useColorMode();
    const login = useSelector(selectLogin);

    //   // Define the config
    //   const config = {
    //     useSystemColorMode: false,
    //     initialColorMode,
    //   };

    //   // extend the theme
    //   const customTheme = extendTheme({ config });

    return (
        !login.hasLogin
            ? <AuthScreen />
            : <MyDrawer />
    );
}

export default Navigation;