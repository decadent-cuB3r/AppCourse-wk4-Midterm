import { Pressable, View, Image, StyleSheet } from "react-native";
import Brands from '../json/brands.json'

const BrandDetail = props => {
    let {brand} = props;
    return (
        <Pressable style={styles.brandWrapper}>
            <View>
                <Image source={{ uri: Brands.Brands[0].image }} style={styles.imageBox} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    brandWrapper: {
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

export default BrandDetail;