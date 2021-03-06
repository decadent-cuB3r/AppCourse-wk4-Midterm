import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Home Stack Components
import HomeScreen from '../../screen/HomeScreen';
import BrandScreen from '../../screen/BrandScreen';
import ProductScreen from '../../screen/ProductScreen';
import ChooseDateScreen from "../../screen/ChooseDateScreen";
import PaymentScreen from "../../screen/PaymentScreen"

//import community icon
import IonIcons from 'react-native-vector-icons/Ionicons';

//theme and colors
import { useTheme } from "@react-navigation/native";
import { useColorMode } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";


//stack initial
const Stack = createStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.text
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IonIcons
                name="menu"
                color={colors.text}
                size={24}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 12 },
          headerRight: () => (
            <IonIcons
              name='notifications-outline'
              size={24}
              color={colors.text}
            />
          ),
          headerRightContainerStyle: { paddingRight: 12 }
        })}
      />
      <Stack.Screen
        name="BrandScreen"
        component={BrandScreen}
        options={{
          title: "",

          headerRightContainerStyle: { paddingRight: 12 }
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: ""
        }}
      />
      <Stack.Screen
        name="ChooseDateScreen"
        component={ChooseDateScreen}
        options={{
          title: "????????????"
        }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          title: "??????????????????"
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;