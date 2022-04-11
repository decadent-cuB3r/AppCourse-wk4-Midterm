import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Home Stack Components
import HomeScreen from '../screen/HomeScreen';
import BrandScreen from '../screen/BrandScreen';
import ProductScreen from '../screen/ProductScreen';

//import community icon
import IonIcons from 'react-native-vector-icons/Ionicons';

//theme and colors
import { useTheme } from "@react-navigation/native";
import { useColorMode } from "native-base";


//stack initial
const Stack = createStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.grey100
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'LeLe Ride',
          headerLeft: () => (
            <IonIcons name="menu" size={24} onPress={() => navigation.toggleDrawer()} />
          ),
        })}
      />
      <Stack.Screen name="BrandScreen" component={BrandScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;