import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Reservation Stack Components
import LocationScreen from '../screen/LocationScreen';

const Stack = createStackNavigator();

const LocationStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="LocationScreen"
            component={LocationScreen}
            options={{
                title: '分店地圖'
            }}
        />
    </Stack.Navigator>
);

export default LocationStack;
