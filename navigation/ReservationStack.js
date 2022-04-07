import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Reservation Stack Components
import ReservationScreen from '../screen/ResvervationScreen';

const Stack = createStackNavigator();

const ReservationStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
    </Stack.Navigator>
);

export default ReservationStack;
