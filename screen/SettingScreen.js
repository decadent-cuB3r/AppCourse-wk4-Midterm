import React from 'react';
import { Box, Center, Switch, HStack, Text, useColorMode } from 'native-base';
import { useTheme } from '@react-navigation/native';

const SettingScreen = () => {
   const { colors } = useTheme();
   const { colorMode, toggleColorMode } = useColorMode();
   

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
            borderRadius="md"
            alignSelf="center"
         >
            <HStack space={8} alignItems="center" >
               <Text fontSize="lg">{colorMode == "light" ? "Light Mode" : "Dark Mode"}</Text>
               <Switch
                  name="light Mode"
                  isChecked={colorMode === "light"}
                  onToggle={toggleColorMode}
                  trackColor={{true: "#F9595F",false:"#989898"}}
                  accessibilityLabel="display-mode"
                  accessibilityHint="light or dark mode"
               />
            </HStack>
         </Center>
      </Box>

   );
};

export default SettingScreen;
