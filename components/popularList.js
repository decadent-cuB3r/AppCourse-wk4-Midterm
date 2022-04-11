import React from "react";
import { FlatList, Text } from "native-base";
import PopularDetail from "./popularDetail";
import SearchBike from "../components/searchBike";
import BrandList from "../components/brandList";
import Products from '../json/products.json'


const PopularList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <PopularDetail popularBike={item} navigation={navigation} />;
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <SearchBike />
          <Text bold fontSize={28}>品牌</Text>
          <BrandList data={Products.Brands} navigation={navigation} />
          <Text bold fontSize={28}>熱門車款</Text>
        </>
      } 
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.ID}
    />
  );
};



export default PopularList;

