import { FlatList, StyleSheet, View, Text } from "react-native";
import BrandDetail from "./BrandDetail";

const BrandList = ({ data }) => {
    const renderItem = ({ item }) => <BrandDetail brand={item} />;

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.brand}
        />
    );
};



export default BrandList;