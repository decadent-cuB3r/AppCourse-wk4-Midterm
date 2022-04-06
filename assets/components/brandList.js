import { FlatList, StyleSheet, Pressable, View, Image, Text } from "react-native";
import Brands from "../json/Brands.json";


const BrandDetail = ({ data }) => (
    <Pressable style={styles.brandWrapper}>
        <View>
            <Text>{data.brand}</Text>
            <Image source={{ uri: data.image }} style={styles.imageBox} />
        </View>
    </Pressable>
);

const styles = StyleSheet.create({
    brandWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 500
    },
    imageBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default function BrandList() {
    const renderItem = ({ item }) => (<BrandDetail data={item} />);

    return (
        <FlatList
            data={Brands.Brands}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.brand}
        />
    );
};