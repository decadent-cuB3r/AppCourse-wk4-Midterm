import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';

//import Drawer components
import TabNavigator from './MyTabs';
import SettingStack from './MyStacks/SettingsStack';
import {useState} from "react-native"

//import Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SwitchSelector from 'react-native-switch-selector';

//import theme
import { lightTheme, darkTheme } from '../myTheme/myTheme';
import { Box, Text, useColorMode, VStack, Input, HStack } from 'native-base';
import { Switch } from 'react-native-switch';

const Drawer = createDrawerNavigator();
const options = [
    { label: 'light', value: '1' },
    { label: 'dark', value: '1.5' }
];
const CustomDrawerContent = (props) => {
    const { colors } = useTheme();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <DrawerContentScrollView {...props}
      >
        <VStack pl="4" justifyContent="center" bgColor="#F9595F" h={130} mb={2}>
          <Text bold fontSize={20} color="#ffffff">Hello!</Text>
          <Text bold fontSize={24} color="#ffffff">Peggy Lin</Text>
        </VStack>
        <DrawerItemList {...props} />
            <VStack w="70%" margin="14%" marginTop="300">
               <SwitchSelector options={options}
                    initial={0} 
                    onPress={toggleColorMode}
                    buttonColor="#F9595F"
                    backgroundColor="#989898"
                    borderColor='#F9595F'
                    textColor="#ffffff"
                />
            </VStack>
      </DrawerContentScrollView>
    );
  }

const Navigation = () => {
    const { colorMode } = useColorMode();
    const myTheme = colorMode == "light" ? lightTheme : darkTheme;
    const colors = myTheme.colors;

    return (
        <NavigationContainer theme={myTheme}>
            <Drawer.Navigator
                screenOptions={{
                    backgroundColor: "white",
                    drawerActiveBackgroundColor: '#F9595F',
                    drawerActiveTintColor: '#FFF',
                    drawerInactiveTintColor: '#989898',
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name='首頁'
                    component={TabNavigator}
                    options={
                        {
                            headerShown: false,
                            drawerIcon: ({ color }) => <Ionicons name='home-sharp' color={color} size={25} />
                        }
                    }
                />
                <Drawer.Screen
                    name='租賃費率與規章'
                    component={TabNavigator}
                    options={
                        {
                            headerShown: false,
                            drawerIcon: ({ color }) => <MaterialIcons name='sports-motorsports' color={color} size={25} />
                        }
                    }
                />
                <Drawer.Screen
                    name='關於LeLe Ride'
                    component={TabNavigator}
                    options={
                        {
                            headerShown: false,
                            drawerIcon: ({ color }) => <Ionicons name='information-circle' color={color} size={25} />
                        }
                    }
                />
                <Drawer.Screen
                    name='常見問題'
                    component={TabNavigator}
                    options={
                        {
                            headerShown: false,
                            drawerIcon: ({ color }) => <Ionicons name='help-circle' color={color} size={25} />
                        }
                    }
                />
                <Drawer.Screen
                    name='設定'
                    component={SettingStack}
                    options={
                        {
                            headerShown: false,
                            drawerIcon: ({ color }) => <Ionicons name='settings-sharp' color={color} size={25} />
                        }
                    }
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;