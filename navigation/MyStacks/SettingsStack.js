import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Profile Stack Components
import SettingScreen from '../../screen/SettingScreen';

//import Icon
import IonIcons from "react-native-vector-icons/Ionicons";
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const SettingStack = ({ navigation }) => {
    const {colors} = useTheme();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
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
                }}
            />
        </Stack.Navigator>
    );
};

export default SettingStack;