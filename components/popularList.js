import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import PopularDetail from "../components/PopularDetail";

const PopularList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <PopularDetail popularBike={item} navigation={navigation} />;
  return (
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.brand}
        />    
  );  
}



export default PopularList;

