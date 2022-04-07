import { Pressable, View, Image, StyleSheet, Text } from "react-native";
import Brands from '../json/brands.json'
import ProductScreen from "../screen/ProductScreen";

const BrandDetail = ({ brand, navigation }) => {
    return (
        <View style={styles.brandWrapper}>
            <Pressable onPress={() => navigation.navigate('BrandScreen', brand)}>
                <Image source={{ uri: brand.image }} style={styles.imageBox} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    brandWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 87,
        height: 70,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 4,
        marginTop: 10,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowOffset:{
            height: 0,
            width: 0
        }
    },
    imageBox: {
        flex: 1,
        width: 87,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BrandDetail;