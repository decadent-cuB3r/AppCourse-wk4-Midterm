import 'react-native-gesture-handler';
import React from 'react';
//import Navigation dependencies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
//import Stacks for Tab component
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ReservationStack from './ReservationStack';
import FavoriteStack from './FavoriteStack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: { height: 90 },
                tabBarInactiveTintColor: '#989898',
                tabBarActiveTintColor: '#F9595F',
            }}
        >
            <Tab.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    
                    headerShown: false,
                    title: '首頁',
                    tabBarIcon: ({color}) => <View style={{marginTop:8}}><Icon name='home' color={color} size={35} /></View>
                }}
            />
            <Tab.Screen
                name='FavoriteStack'
                component={FavoriteStack}
                options={{
                    headerShown: false,
                    title: "我的收藏",
                    
                    tabBarIcon: ({color}) => <View style={{marginTop:8}}><Icon name='heart' color={color} size={32} /></View>
                }}
            />
            <Tab.Screen
                name='ReservationStack'
                component={ReservationStack}
                options={{
                    headerShown: false,
                    title: "我的訂單",
                    tabBarIcon: ({color}) => <View style={{marginTop:8}}><Icon name='book-open' color={color} size={32} /></View>
                }}
            />
            <Tab.Screen
                name='ProfileStackScreen'
                component={ProfileStack}
                options={{
                    headerShown: false,
                    title: "會員專區",
                    tabBarIcon: ({color}) => <View style={{marginTop:8}}><Icon name='account-circle' color={color} size={32} /></View>
                }}
            />
        </Tab.Navigator>
    );
}


export default TabNavigator;