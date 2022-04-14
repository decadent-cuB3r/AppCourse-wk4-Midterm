import { Text, StyleSheet, FlatList, View, HStack, VStack, Pressable, AspectRatio, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import FavoriteBikeDetail from "../components/favoriteBikeDetail";


const FavoriteBikeScreen = ({ navigation }) => {
    const bikes = useSelector((state) => state.favBike.bikes);
    const renderItem = ({ item }) => <FavoriteBikeDetail popularBike={item} navigation={navigation} />;


    return (
        <FlatList
            data={bikes}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
        />
    );
};

export default FavoriteBikeScreen;