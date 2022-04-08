import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Home Stack Components
import HomeScreen from '../screen/HomeScreen';
import BrandScreen from '../screen/BrandScreen';
import ProductScreen from '../screen/ProductScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                title: 'LeLe Ride'
                
            }}
        />
        <Stack.Screen name="BrandScreen" component={BrandScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
);

export default HomeStack;