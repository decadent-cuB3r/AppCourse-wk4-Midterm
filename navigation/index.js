import React from 'react';
import { useSelector } from "react-redux";

import MyDrawer from './MyDrawers';
import AuthStack from './MyStacks/AuthStack';

import { selectLogin } from "../redux/accountSlice";

const Navigation = () => {
    const login = useSelector(selectLogin);

    return (
        !login.hasLogin
            ? <AuthStack />
            : <MyDrawer />
    );
}

export default Navigation;