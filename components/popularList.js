import React from "react";
import { FlatList, Text, HStack, Button, VStack } from "native-base";
import PopularDetail from "./popularDetail";
import SearchBike from "../components/searchBike";
import BrandList from "../components/brandList";
import Products from '../json/products.json'


const PopularList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <PopularDetail popularBike={item} navigation={navigation} />;
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <VStack>
          <SearchBike />
          <Text bold fontSize={20} marginTop={4} marginBottom={1} marginLeft={5}>品牌</Text>
          <BrandList data={Products.Brands} navigation={navigation} />
          <HStack justifyContent="space-between" marginRight="5%" marginTop={2} marginBottom={2}>
            <Text bold fontSize={20} marginLeft={5} >熱門車款</Text>
            <Button size="sm" marginTop="1.5" paddingTop="0" paddingBottom="0" borderRadius={10} h={6} colorScheme="red">查看更多</Button>
          </HStack>
        </VStack>
      }
      data={list}
      renderItem={renderItem}
      keyExtractor={list => list.ID}
    />
  );
};



export default PopularList;

