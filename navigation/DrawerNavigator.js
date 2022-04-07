import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import Drawer components
import TabNavigator from './TabNaviagator';
import SettingScreen from '../screen/SettingScreen';

const Drawer = createDrawerNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='HomeTab' component={TabNavigator} />
            <Drawer.Screen name='Setting' component={SettingScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);

export default Navigation;