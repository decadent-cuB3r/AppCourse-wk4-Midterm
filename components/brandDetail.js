import { Pressable, View, Image, StyleSheet, Text } from "react-native";
import Brands from '../json/brands.json'

const BrandDetail = props => {
    let { brand } = props;
    return (
        <View style={styles.brandWrapper}>
            <Pressable>

                <Image source={{ uri: brand.image }} style={styles.imageBox} />

            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    brandWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 87,
        height: 65,
        backgroundColor: "#000",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    imageBox: {
        flex: 1,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BrandDetail;