import { FlatList, StyleSheet, Pressable, View, Image, Text } from "react-native";
import BrandDetail from "./BrandDetail";

const BrandList = ({ data }) => {
    const renderItem = ({ item }) => <BrandDetail brand={item} />;

    return (
        <View>
            <Text style={styles.boldText}>品牌</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.brand}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boldText: {
        fontWeight: "700",
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 30
    }
});

export default BrandList;