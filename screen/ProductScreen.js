import {
  Center,
  ScrollView,
  AspectRatio,
  Text,
  Image,
  HStack,
  VStack,
  Button,
  Select,
  FormControl,
  CheckIcon,
  Box
} from "native-base";
import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const ProductScreen = ({ route, navigation }) => {
  const {
    brand,
    model,
    image,
    grade,
    rating,
    exhaust,
    engine,
    dryWeight,
    horsePower,
    seatHeight,
    dimensions,
    basicPrice
  } = route.params;
  const Star = require("../assets/Star.png");
  let [service, setService] = React.useState("");

  const SelectShop = () => {
    return <Center>
      <Box w="100%" maxW="400" marginBottom={3}>
        <Select selectedValue={service} minWidth="200" fontSize="14" fontWeight="bold" accessibilityLabel="Choose Service" placeholder="請選擇取車地點" _selectedItem={{
          bg: "#F9595F",

          endIcon: <CheckIcon size="4" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="台北大安分店" value="台北大安" />
          <Select.Item label="新北三重分店" value="新北三重" />
          <Select.Item label="台中西屯分店" value="台中西屯" />
          <Select.Item label="桃園中壢分店" value="桃園中壢" />
          <Select.Item label="高雄前鎮分店" value="高雄前鎮" />
        </Select>
      </Box>
    </Center>;
  };

  const CheckAndGo = () => {
    if (service == ""){
      alert("請選擇店家");
    } else {
      navigation.navigate('ChooseDateScreen');
    }
};

  return (
    <Center>
      <ScrollView
        width="90%"
        showsVerticalScrollIndicator={false}
      >
        <VStack marginTop={2}>
          <HStack justifyContent="space-between">
            <Text bold fontSize="md" color="#989898">
              {brand}
            </Text>
            <HStack>
              <Image source={Star} alt="star" marginTop={1.5} marginRight={1} />
              <Text bold fontSize="md">
                {rating}
              </Text>
            </HStack>
          </HStack>
          <HStack justifyContent="space-between">
            <Text bold fontSize="xl">
              {model}
            </Text>
            <Text bold fontSize="md" marginTop={1}>
              {grade}
            </Text>
          </HStack>
        </VStack>
        <AspectRatio w="300">
          <Image
            source={{ uri: image }}
            width="330"
            marginLeft={2}
            alt="Picture of bike"
          />
        </AspectRatio>
        <Box style={styles.boxWrapper} justifyContent="space-around" >
          <HStack
            height="170"
            width="100%"
            borderRadius="20"
            padding="5"
            _dark={{ bg: "blueGray.800", borderColor: 'blueGray.500', borderWidth: 0.6 }}
            _light={{ bg: "white" }}
          >
            <VStack paddingLeft={5}
            >
              <Text bold fontSize="xs" color="#707070">
                排氣量
              </Text>
              <Text bold fontSize="xs" marginLeft={6} color="#F9595F">
                {exhaust}
              </Text>
              <Text bold fontSize="xs" color="#707070">
                乾燥重量
              </Text>
              <Text bold fontSize="xs" marginLeft={6} color="#F9595F">
                {dryWeight}
              </Text>
              <Text bold fontSize="xs" color="#707070">
                座高
              </Text>
              <Text bold fontSize="xs" marginLeft={6} color="#F9595F">
                {seatHeight}
              </Text>
            </VStack>
            <VStack paddingRight={5}>
              <Text bold fontSize="xs" color="#707070">
                引擎形式
              </Text>
              <Text bold fontSize="xs" marginLeft={6} color="#F9595F">
                {engine}
              </Text>
              <Text bold fontSize="xs" color="#707070">
                最大馬力
              </Text>
              <Text bold fontSize="xs" marginLeft={6} color="#F9595F">
                {horsePower}
              </Text>
              <Text bold fontSize="xs" color="#707070">
                車長X車高X車寬
              </Text>
              <Text bold fontSize="xs" marginLeft={6} color="#F9595F">
                {dimensions}
              </Text>
            </VStack>
          </HStack>
        </Box>
        <VStack w="95%" marginLeft="3%">
          <HStack>
            <Text bold fontSize="xs" color="#707070">
              費用計算
            </Text>
          </HStack>
          <HStack
            justifyContent="space-between"
            borderBottomWidth={1}
            borderBottomColor="#707070"
            paddingBottom="2"
            marginBottom={2}
          >
            <Text bold fontSize="sm">
              基本金額
            </Text>
            <HStack>
              <Text bold>TWD</Text>
              <Text bold color="#F9595F">{basicPrice}</Text>
            </HStack>
          </HStack>
          <VStack
            justifyContent="space-between"
            borderBottomWidth={1}
            borderBottomColor="#707070"
            paddingBottom="2"
            marginBottom={2}
          >
            <Text bold fontSize="xs" color="#707070">
              里程費用
            </Text>
            <Text bold>第1至50公里: TWD 10/公里</Text>
            <Text bold>第51至150公里: TWD 8/公里</Text>
            <Text bold>第151公里以上: TWD 6/公里</Text>
          </VStack>
          <VStack>
            <Text bold fontSize="xs" color="#707070">取車地點</Text>
            <SelectShop />
            <Button
              marginBottom={3}
              colorScheme="red"
              onPress={CheckAndGo} >
              查看可租借日期
            </Button>
          </VStack>

        </VStack>
      </ScrollView>
    </Center>
  );
};



const styles = StyleSheet.create({
  boxWrapper: {
    alignItems: "center",
    width: "95%",
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginLeft: "3%",
    marginTop: 10,
    marginBottom: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
});

export default ProductScreen;
