import { FlatList, View, Image, StyleSheet } from "react-native"
import Brands from "../json/Brands.json"

export default function BrandList() {
    const renderItem = ({ item }) =>
    (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.imageBox} />
        </View>
    );


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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});