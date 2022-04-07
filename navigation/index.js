import 'react-native-gesture-handler';
import React from 'react';
//import Navigation dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Home Stack Components
import HomeScreen from '../screen/HomeScreen';
import BrandScreen from '../screen/BrandScreen';
import ProductScreen from '../screen/ProductScreen';

//Profile Stack Components
import ProfileScreen from '../screen/ProfileScreen';

//Favorite Bike Stack Components
import FavoriteBikeScreen from '../screen/FavoriteBikesScreen';

//Reservation Stack Components
import ReservationScreen from '../screen/ResvervationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Navigation = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

const HomeStack = () => (
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
        <Tab.Screen name='HomeStackScreen' component={HomeStack} options={{headerShown: false}}/>
        <Tab.Screen name='FavoriteBikeStackScreen' component={FavoriteStack} options={{headerShown: false}}/>
        <Tab.Screen name='ReservationStackScreen' component={ReservationStack} options={{headerShown: false}}/>
        <Tab.Screen name='ProfileStackScreen' component={ProfileStack} options={{headerShown: false}}/>
    </Tab.Navigator>
);

// const DrawerNavigator = () => (
//     <Drawer.Navigator>
//         <Drawer.Screen name={HomeTabs} component={TabNavigator} />
//     </Drawer.Navigator>
// );

export default Navigation;
