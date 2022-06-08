import React, { useState } from 'react';
import { Box, Center, Switch, HStack, Text, useColorMode, Button } from 'native-base';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signOut } from '../redux/accountSlice';

const SettingScreen = () => {
   const { colors } = useTheme();
   const { colorMode, toggleColorMode } = useColorMode();
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const dispatch = useDispatch();


   return (
      <Box
         flex={1}
         _light={{ bgColor: colors.comBG100 }}
         _dark={{ bgColor: colors.background }}
      >
         <Center
            shadow={2} width="90%"
            mt="2" px="2" py="4"
            _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "white" }}
            alignSelf="center"
         >
            <HStack w="90%" justifyContent="space-between"  >
               <Text fontSize="lg">通知設定</Text>
               <Switch
                  value={isEnabled}
                  name="alert"
                  trackColor={{ false: "#767577", true: "#f9595f" }}
                  onToggle={toggleSwitch}
               />
            </HStack>

         </Center>
         <Center>
            <Button mt={5} colorScheme="indigo" w="90%"
               onPress={() => dispatch(signOut())}
            >
               Sign out
            </Button>
         </Center>
      </Box>

   );
};

export default SettingScreen;
