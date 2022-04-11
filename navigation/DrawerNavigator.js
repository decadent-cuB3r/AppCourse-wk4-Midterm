import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import Drawer components
import TabNavigator from './TabNaviagator';
import SettingScreen from '../screen/SettingScreen';

//import Icons
import Ionicons from "react-native-vector-icons/Ionicons";

//import theme
import myTheme from '../myTheme/myTheme';
import { StatusBar, useColorMode } from 'native-base';


const Drawer = createDrawerNavigator();

const Navigation = () => {
    const colorMode = useColorMode();

    return (
        <NavigationContainer theme={myTheme}>
            <StatusBar
                barStyle={
                    colorMode == "light" ? "dark-content" : "light-content"
                }
                backgroundColor={
                    colorMode == "light" ? "white" : "black"
                }
            />
            <Drawer.Navigator
                screenOptions={
                    {
                        backgroundColor: "white",
                        drawerActiveBackgroundColor: '#F9595F',
                        drawerActiveTintColor: '#FFF',
                        drawerInactiveTintColor: '#989898',
                    }
                }
            >
                <Drawer.Screen
                    name='首頁'
                    component={TabNavigator}
                    options={
                        {
                            headerShown: false,
                            drawerIcon: ({color}) => <Ionicons name='home-sharp' color={color} size={25} />
                        }
                    }
                />
                <Drawer.Screen
                    name='設定'
                    component={SettingScreen}
                    options={
                        {
                            headerShown: true,
                            drawerIcon: ({color}) => <Ionicons name='settings-sharp' color={color} size={25} />
                        }
                    }
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;