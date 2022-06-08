import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screen/LoginScreen';
import WelcomeScreen from '../../screen/WelcomeScreen';
import RegisterScreen from '../../screen/RegisterScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;