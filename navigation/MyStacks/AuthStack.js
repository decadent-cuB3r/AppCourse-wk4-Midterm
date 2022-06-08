import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../../screen/WelcomeScreen';
import LoginScreen from '../../screen/LoginScreen';
import RegisterScreen from '../../screen/RegisterScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='WelcomeScreen'
                    component={WelcomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{
                        title: "",
                        headerBackTitleVisible: false,
                        headerTintColor: "white",
                        headerStyle: {
                            backgroundColor: '#F9595F',
                            shadowOpacity: 0
                        },
                    }}
                />
                <Stack.Screen
                    name='RegisterScreen'
                    component={RegisterScreen}
                    options={{
                        title: "",
                        headerBackTitleVisible: false,
                        headerTintColor: "white",
                        headerStyle: {
                            backgroundColor: '#F9595F',
                            shadowOpacity: 0
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthStack;