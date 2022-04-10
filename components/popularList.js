import React from "react";
import { FlatList, Text } from "native-base";
import PopularDetail from "./PopularDetail";

const PopularList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <PopularDetail popularBike={item} navigation={navigation} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.ID}
    />
  );
};



export default PopularList;

