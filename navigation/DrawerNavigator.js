import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import Drawer components
import TabNavigator from './TabNaviagator';
import SettingStack from './SettingsStack';

//import Icons
import Ionicons from "react-native-vector-icons/Ionicons";

//import theme
import { lightTheme, darkTheme } from '../myTheme/myTheme';
import { useColorMode } from 'native-base';


const Drawer = createDrawerNavigator();

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