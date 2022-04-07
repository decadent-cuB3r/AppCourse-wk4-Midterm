import 'react-native-gesture-handler';
import React from 'react';

//import Navigation dependencies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Stacks for Tab component
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ReservationStack from './ReservationStack';
import FavoriteStack from './FavoriteStack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='HomeStack'
                component={HomeStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='FavoriteStack'
                component={FavoriteStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='ReservationStack'
                component={ReservationStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='ProfileStackScreen'
                component={ProfileStack}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;