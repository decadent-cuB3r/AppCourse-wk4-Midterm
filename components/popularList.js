import React from "react";
import { FlatList } from "native-base";
import PopularDetail from "./popularDetail";

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

