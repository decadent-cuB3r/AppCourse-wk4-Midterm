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
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: () => <Icon name='home' size={26} />
                }}
            />
            <Tab.Screen
                name='FavoriteStack'
                component={FavoriteStack}
                options={{
                    headerShown: false,
                    title: "Favorite",
                    tabBarIcon: () => <Icon name='heart' size={26} />
                }}
            />
            <Tab.Screen
                name='ReservationStack'
                component={ReservationStack}
                options={{
                    headerShown: false,
                    title: "Reserved",
                    tabBarIcon: () => <Icon name='book-open' size={26} />
                }}
            />
            <Tab.Screen
                name='ProfileStackScreen'
                component={ProfileStack}
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: () => <Icon name='account-circle' size={26} />
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;