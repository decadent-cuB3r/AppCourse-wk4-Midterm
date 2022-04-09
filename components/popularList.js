import React from "react";
import { FlatList } from "react-native";
import PopularDetail from "./PopularDetail";

const PopularList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <PopularDetail popularBike={item} navigation={navigation} />;
  return (
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.brand}
        />    
  );  
};



export default PopularList;

