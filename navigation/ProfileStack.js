import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Profile Stack Components
import ProfileScreen from '../screen/ProfileScreen';

const Stack = createStackNavigator();

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="會員專區" component={ProfileScreen} />
    </Stack.Navigator>
);

export default ProfileStack;