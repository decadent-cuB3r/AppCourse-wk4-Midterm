import React from 'react-native';
import { StyleSheet } from 'react-native';
import { useColorMode, useTheme, Box, Text, Pressable, View, Avatar, HStack, Image, VStack, Button, Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
    const { colorMode } = useColorMode();
    const { colors } = useTheme();


    return (
      <Box>
        <Pressable 
        borderBottomWidth={1}
        borderBottomColor="#E4E4E5"
        paddingBottom="2"
        marginBottom={2}
        >
          <HStack space={5} w="90%" margin={5} marginBottom={2}>
            <Avatar size="lg"
                    source={{uri: 'https://i.imgur.com/QhYLD4r.jpg'}}
                    alt="profile"/>
            <VStack w="60%">
              <Text bold fontSize="lg">Peggy Lin</Text>
              <Button borderRadius={20} colorScheme='red' size="sm" marginTop="1.5" paddingTop="0" paddingBottom="0" width={100} h={6} >升級VIP會員</Button>
            </VStack>
                    
          </HStack>
        </Pressable>
        <Pressable
         borderBottomWidth={1}
         borderBottomColor="#E4E4E5"
         paddingBottom="2"
         marginBottom={2}>
          <HStack justifyContent="space-between" w="92%" margin={1} marginLeft={5} marginRight={5}>
            <Text fontSize="16" marginTop={0.5}>基本資料設定</Text>
            <MaterialIcons name="keyboard-arrow-right" color="#989898" size={30}  />
          </HStack>  
        </Pressable>
        <Pressable
         borderBottomWidth={1}
         borderBottomColor="#E4E4E5"
         paddingBottom="2"
         marginBottom={2}>
          <HStack justifyContent="space-between" w="92%" margin={1} marginLeft={5} marginRight={5}>
            <Text fontSize="16" marginTop={0.5}>修改密碼</Text>
            <MaterialIcons name="keyboard-arrow-right" color="#989898" size={30}  />
          </HStack>  
        </Pressable>
        <Pressable
         borderBottomWidth={1}
         borderBottomColor="#E4E4E5"
         paddingBottom="2"
         marginBottom={2}>
          <HStack justifyContent="space-between" w="92%" margin={1} marginLeft={5} marginRight={5}>
            <Text fontSize="16" marginTop={0.5}>支付設定</Text>
            <MaterialIcons name="keyboard-arrow-right" color="#989898" size={30}  />
          </HStack>  
        </Pressable>
        <Pressable
         borderBottomWidth={1}
         borderBottomColor="#E4E4E5"
         paddingBottom="2"
         marginBottom={2}>
          <HStack justifyContent="space-between" w="92%" margin={1} marginLeft={5} marginRight={5}>
            <Text fontSize="16" marginTop={0.5}>優惠券</Text>
            <MaterialIcons name="keyboard-arrow-right" color="#989898" size={30}  />
          </HStack>  
        </Pressable>
      </Box>

    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });