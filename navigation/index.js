import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screen/HomeScreen';
import BrandScreen from '../screen/BrandScreen';
import ProfileScreen from '../screen/BrandScreen';
import FavoriteBikeScreen from '../screen/FavoriteBikesScreen';
import ReservationScreen from '../screen/ResvervationScreen';
import ProductScreen from '../screen/ProductScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BrandScreen" component={BrandScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
);

const FavoriteStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="FavortieBikeScreen" component={FavoriteBikeScreen} />
    </Stack.Navigator>
);

const ReservationStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
    </Stack.Navigator>
);

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
);

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='HomeStackScreen' component={HomeStack} />
        <Tab.Screen name='FavoriteBikeStackScreen' component={FavoriteStack} />
        <Tab.Screen name='ReservationStackScreen' component={ReservationStack} />
        <Tab.Screen name='ProfileStackScreen' component={ProfileStack} />
    </Tab.Navigator>
);

const Navigation = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

