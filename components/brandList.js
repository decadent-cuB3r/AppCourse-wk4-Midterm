import { FlatList, StyleSheet, View, Text } from "react-native";
import BrandDetail from "./BrandDetail";

const BrandList = ({ data, navigation }) => {
    const renderItem = ({ item }) => <BrandDetail brand={item} navigation={navigation} />;

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.brand}
            contentInset={{right: 17}}
        />
    );
};



export default BrandList;