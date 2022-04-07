import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import PopularDetail from "../components/PopularDetail";

const PopularList = ({ list }) => {
  const renderItem = ({ item }) => <PopularDetail popularBike={item} />;
  return (
    <View>
        <Text style={styles.boldText}>熱門車款</Text>
        <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.brand}
        />    
    </View>
  );  
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 10,
    }
});

export default PopularList;

